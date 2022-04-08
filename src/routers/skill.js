import { Router } from "express";
import {
  getSkill,
  postSkill,
  putSkill,
  removeSkill,
} from "../controller/skill";
import {
  checkUserById,
  isAdmin,
  isAuth,
  requireSignin,
} from "../middleware/middlewareUser";

const route = Router();

route.get("/skill", getSkill);

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
