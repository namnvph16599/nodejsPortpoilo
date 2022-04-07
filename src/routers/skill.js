import { Router } from "express";
import { getSkill, postSkill, putSkill, removeSkill } from "../controller/skill";

const route = Router();

route.get("/skill", getSkill);
route.post("/skill", postSkill);
route.delete("/skill/:id", removeSkill);
route.put("/skill/:id", putSkill);


export default route;