import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//logic ma hoa password
userSchema.methods = {
  //ma hoa pass khi signup
  encryPassword(password) {
    if (!password) return;
    try {
      return createHmac("sha256", "040202").update(password).digest("hex");
    } catch (e) {
      console.log(e);
    }
  },
  //ma hoa pass khi signin
  authenticate(password) {
    return (this.password = this.encryPassword(password));
  },
};

//middleware truoc khi save()

userSchema.pre("save", function (next) {
  this.password = this.encryPassword(this.password);
  next();
});
export default mongoose.model("User", userSchema);
