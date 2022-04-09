import { Router } from "express";
import { getResume, getResumeById, postResume, putResume, removeResume } from "../controller/resume";
import { checkUserById, isAdmin, isAuth, requireSignin } from "../middleware/middlewareUser";

const route = Router();

route.get("/resume", getResume);
route.get("/resume/:id",getResumeById);
route.post("/resume/:userId",checkUserById,requireSignin,isAuth,isAdmin, postResume);
route.delete("/resume/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin, removeResume);
route.put("/resume/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin, putResume);

route.param("userId", checkUserById)
export default route;