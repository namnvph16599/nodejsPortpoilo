import { Router } from "express";
import { getInfo, postInfo, putInfo, removeInfo } from "../controller/info";
import { checkUserById, isAdmin, isAuth, requireSignin } from "../middleware/middlewareUser";

const route = Router();

route.get("/info", getInfo);
route.post("/info/:userId",checkUserById,requireSignin,isAuth,isAdmin ,postInfo);
route.delete("/info/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin ,removeInfo);
route.put("/info/:id/:userId",checkUserById,requireSignin,isAuth,isAdmin ,putInfo);

route.param("userId" , checkUserById)
export default route;