import mongoose, { Schema } from "mongoose";

const SoftSkill = new Schema({
  name: {
    type: String,
    required: true,
  },
  icons: {
    type: String,
    required: true,
  },
});

export default mongoose.model("softSkill", SoftSkill);
