import { defineEventHandler } from "h3";
import { Contact } from "../../models/contacts";

 export var contacts : Contact[] = [
  {
    firstname: "Demey",
    lastname: "Manu",
    email: "demey.emmanuel@gmail.com",
    phone: "+33647474202",
  },
];

export default defineEventHandler(() => {
  return contacts;
});
