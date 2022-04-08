import User from "../model/user";
import expressJWT from "express-jwt";


export const checkUserById = async (req, res, next, id) => {
  //kiem tra xem user id co ton tai hay khong
  const user = await User.findById(id).exec();
  //neu khong co
  if (!user) {
    res.json({ message: "User id does not exist" });
  }
  //neu co
  req.profile = user;
  next();
};

export const requireSignin = expressJWT({
  algorithms: ["HS256"],
  secret: "123456", //ma bao mat
  requestProperty: "auth", //luu vao req.auth
});

export const isAuth = (req, res, next) => {
  const status = req.profile._id == req.auth._id;
  if (!status) {
    res.status(404).json({ message: "You do not have access" });
  }
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.profile._id == 0) {
    res.status(404).json({ message: "You are not an admin" });
  }
  next();
};
