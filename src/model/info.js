import mongoose, { Schema } from "mongoose";
const infoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  careerGoals: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Info", infoSchema);
