import type { APIRoute } from "astro";

export const post: APIRoute = async ({ locals, request, redirect }) => {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  console.log("attempting sign up");

  try {
    await locals.pb.collection("users").create({ ...userData });
    await locals.pb
      .collection("users")
      .authWithPassword(userData.email, userData.password);
  } catch (err) {
    console.error("pocketbase error", err);
  }

  return redirect("/");
};
