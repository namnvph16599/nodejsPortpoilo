import { Router } from "express";
import { getSoftSkill, getSoftSkillById, postSoftSkill, putSoftSkill, removeSoftSkill } from "../controller/softSkill";
import {
  checkUserById,
  isAuth,
  isAdmin,
  requireSignin,
} from "../middleware/middlewareUser";

const route = Router();

route.get("/softskill", getSoftSkill);
route.get("/softskill/:id", getSoftSkillById);


route.post(
  "/softskill/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  postSoftSkill
);

route.delete(
  "/softskill/:id/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  removeSoftSkill
);
route.put(
  "/softskill/:id/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  putSoftSkill
);

route.param("userId", checkUserById);

export default route;
  