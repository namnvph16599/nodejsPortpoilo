import { Router } from "express";
import { getResume, postResume, putResume, removeResume } from "../controller/resume";

const route = Router();

route.get("/resume", getResume);
route.post("/resume", postResume);
route.delete("/resume/:id", removeResume);
route.put("/resume/:id", putResume);


export default route;