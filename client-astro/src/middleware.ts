import { defineMiddleware } from "astro/middleware";
import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "./lib/utils";

export const onRequest = defineMiddleware(
  async ({ locals, request, url, redirect }, next) => {
    try {
      locals.pb = new PocketBase(import.meta.env.PB_URL);
    } catch (err) {
      console.error("could not connect to PocketBase");
      return new Response("Could not connect to Pocketbase", { status: 500 });
    }

    // grab cookie from browser if exists
    locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");

    try {
      if (locals.pb.authStore.isValid) {
        await locals.pb.collection("users").authRefresh();
        const user = serializeNonPOJOs(locals.pb.authStore.model);
        locals.user = user;
      }
    } catch (_) {
      locals.pb.authStore.clear();
      locals.user = undefined;
    }

    // complete other actions
    const response = await next();

    // set cookie to latest authstore
    response.headers.set(
      "set-cookie",
      locals.pb.authStore.exportToCookie({ secure: false })
    );

    // redirect if logged in
    // if (
    //   locals.pb.authStore.isValid &&
    //   (url.pathname.startsWith("/auth") || url.pathname === "/")
    // ) {
    //   const items = await locals.pb
    //     .collection("lists")
    //     .getFullList({ sort: "-created" });
    //   return redirect(`/${items[0].id}`);
    // }

    // redirect if not logged in
    if (
      !locals.user &&
      !(
        url.pathname.startsWith("/auth") ||
        url.pathname.startsWith("/api/auth") ||
        url.pathname === "/"
      )
    ) {
      console.log(`blocked access to ${url.pathname}`);
      return redirect("/");
    }

    // set cookie to latest authstore
    return response;
  }
);
