import { Router } from "express";
import { getInfo, postInfo, putInfo, removeInfo } from "../controller/info";

const route = Router();

route.get("/info", getInfo);
route.post("/info", postInfo);
route.delete("/info/:id", removeInfo);
route.put("/info/:id", putInfo);


export default route;