import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
//router
import InfoRoute from "./routers/info";
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", InfoRoute);
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
