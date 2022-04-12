import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  domains: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  technology : {
    type: String,
    required: true,
  },
});

export default mongoose.model("project", projectSchema);
