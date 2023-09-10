import type { APIRoute } from "astro";

export const POST: APIRoute = ({ locals, redirect }) => {
  locals.pb.authStore.clear();
  locals.user = undefined;

  return redirect("/auth");
};
