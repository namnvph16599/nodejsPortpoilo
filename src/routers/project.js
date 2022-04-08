import { Router } from "express";
import {
  getAllProjects,
  getProject,
  postProject,
  putProject,
  removeProject,
} from "../controller/project";
import { checkUserById, isAdmin, isAuth, requireSignin } from "../middleware/middlewareUser";

const route = Router();

route.get("/project", getAllProjects);
route.get("/project/:id", getProject);
route.post("/project/:userId",checkUserById,requireSignin,isAuth,isAdmin, postProject);
route.delete("/project/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin, removeProject);
route.put("/project/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin, putProject);

route.param("userId", checkUserById);
export default route;
