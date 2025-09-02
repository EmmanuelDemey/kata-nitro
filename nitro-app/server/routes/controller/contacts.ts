import { defineEventHandler } from "h3";

var contacts = [
  {
    nom: "Demey",
    prenom: "Manu",
    email: "demey.emmanuel@gmail.com",
    phone: "+33647474202",
  },
];

export default defineEventHandler(() => {
  return contacts;
});
