import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  HTML: {
    type: Number,
  },
  CSS: {
    type: Number,
  },
  PHP: {
    type: Number,
  },
  JAJVASCRIPT: {
    type: Number,
  },
  WORDPRESS: {
    type: Number,
  },
  NODEJS: {
    type: Number,
  },
  REACTJS: {
    type: Number,
  },
});

export default mongoose.model("Skill", skillSchema);
