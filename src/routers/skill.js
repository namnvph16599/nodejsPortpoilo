import { Router } from "express";
import {
  getSkill,
  postSkill,
  putSkill,
  removeSkill,
  getSkillById
} from "../controller/skill";
import {
  checkUserById,
  isAuth,
  isAdmin,
  requireSignin,
} from "../middleware/middlewareUser";

const route = Router();

route.get("/skill", getSkill);
route.get("/skill/:id", getSkillById);


route.post(
  "/skill/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  postSkill
);

route.delete(
  "/skill/:id/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  removeSkill
);
route.put(
  "/skill/:id/:userId",
  checkUserById,
  requireSignin,
  isAuth,
  isAdmin,
  putSkill
);

route.param("userId", checkUserById);

export default route;
  