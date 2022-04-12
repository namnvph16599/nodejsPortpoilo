import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
//router
import InfoRoute from "./routers/info";
import SkillRoute from "./routers/skill";
import SoftSkillRoute from "./routers/softSkill";

import ContactRoute from "./routers/contact";
import ResumeRoute from "./routers/resume";
import UserRoute from "./routers/user";
import ProjectRoute from "./routers/project";


const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", InfoRoute);
app.use("/api", SkillRoute);
app.use("/api", ContactRoute);
app.use("/api", ResumeRoute);
app.use("/api", UserRoute);
app.use("/api", ProjectRoute);
app.use("/api", SoftSkillRoute);


//db
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => {
    console.log("Connect database succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

//
const port = 8000;

app.listen(port, () => {
  console.log("Server is running", port);
});
