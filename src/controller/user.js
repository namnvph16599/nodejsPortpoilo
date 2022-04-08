import User from "../model/user";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      res.json({ message: "Email does not exist" });
    }

    if (!user.authenticate(password)) {
      res.json({ message: "Password wrong" });
    }
    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 });
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    //B1 tim kiem xem email da ton tai hay chua
    const exitsUser = await User.findOne({ email }).exec();
    if (exitsUser) {
      res.json("Email already exists");
    }
    //B2 Neu chua ton tai email thi bat dau tao ra tk
    const result = await new User({ email, password, name }).save();
    res.json({
      user: {
        id: result._id,
        name: result.name,
        email: result.email,
        role: result.role,
      },
    });
  } catch (error) {
    res.status(404).json("Signup failed");
  }
};
