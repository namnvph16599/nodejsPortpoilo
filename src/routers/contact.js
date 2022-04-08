import { Router } from "express";
import { getAllContacts, getContact, postContact } from "../controller/contact";

const route = Router();

route.get("/contact", getAllContacts);

route.post("/contact", postContact);

route.get("/contact/:id", getContact);

export default route;
