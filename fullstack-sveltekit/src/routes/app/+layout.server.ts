import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ locals, fetch }) => {
  return {
    user: locals.user,
    lists: fetch("/app/list").then((res) => res.json()),
  };
};
