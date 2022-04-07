import Skill from "../model/skill";

//get all info
export const getSkill = async (req, res) => {
  try {
    const skill = await Skill.find().exec();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download skill",
    });
  }
};
//post info
export const postSkill = async (req, res) => {
  try {
    const skill = await new Skill(req.body).save();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Add Skill failed",
    });
  }
};

//remove info
export const removeSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Add Skill failed",
    });
  }
};

//put

export const putSkill = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const skill = await Skill.findByIdAndUpdate(condition, doc, option);
    res.json(skill);
  } catch (err) {
    res.status(404).json({ message: "Upload failed" });
  }
};
