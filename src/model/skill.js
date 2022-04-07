import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillProgress: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Skill", skillSchema);
