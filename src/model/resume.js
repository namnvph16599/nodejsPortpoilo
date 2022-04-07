import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Resume", resumeSchema);
