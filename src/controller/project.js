import Project from "../model/project";

export const getAllProjects = async (req, res) => {
  try {
    const result = await Project.find().exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Get all projects failed" });
  }
};
export const getProject = async (req, res) => {
  try {
    const result = await Project.findById({ _id: req.params.id }).exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Get  projects by id failed" });
  }
};
export const postProject = async (req, res) => {
  try {
    const result = await new Project(req.body).save();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Post  projects failed" });
  }
};
export const removeProject = async (req, res) => {
  try {
    const result = await Project.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Remove  projects by id failed" });
  }
};
export const putProject = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const result = await Project.findByIdAndUpdate(
      condition,
      doc,
      option
    ).exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Update  projects by id failed" });
  }
};
