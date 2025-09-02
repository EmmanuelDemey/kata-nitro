import { defineEventHandler, readBody } from "h3";
import { contacts } from "../../routes/controller/contacts";

export default defineEventHandler(async (handler) => {
  const body = await readBody(handler);
  console.log(body);
  contacts.push(body);
});

