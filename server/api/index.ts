import app from "@/index";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

export default process.env.VERCEL ? handle(app) : app;
