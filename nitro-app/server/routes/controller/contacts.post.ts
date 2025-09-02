import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (handler) => {
  const body = await readBody(handler);
  console.log(body);
});
