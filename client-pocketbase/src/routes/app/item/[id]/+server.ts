import { error, json, type RequestHandler } from "@sveltejs/kit";
import type { ClientResponseError } from "pocketbase";

export const GET: RequestHandler = async ({ locals, params }) => {
  const id = params.id || "";

  try {
    const item = await locals.pb.collection("items").getOne(id);
    return json(item);
  } catch (err) {
    const pbError = err as ClientResponseError;
    console.error(pbError);
    throw error(pbError.response.code, pbError.response.message);
  }
};

export const POST: RequestHandler = async ({ locals, params }) => {
  return new Response();
};

export const DELETE: RequestHandler = async ({ locals, params }) => {
  const id = params.id || "";

  try {
    const data = await locals.pb.collection("items").delete(id);
    return json(data);
  } catch (err) {
    const pbError = err as ClientResponseError;
    console.error(pbError);
    throw error(pbError.response.code, pbError.response.message);
  }
};
