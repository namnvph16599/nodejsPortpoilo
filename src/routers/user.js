import { Router } from "express";
import { signin, signup } from "../controller/user";
const route = Router();

route.post("/signin", signin);
route.post("/signup", signup);

export default route;
