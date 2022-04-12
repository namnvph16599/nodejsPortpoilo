import SoftSkill from "../model/softskill";

//get all info
export const getSoftSkill = async (req, res) => {
  try {
    const skill = await SoftSkill.find().exec();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download skill",
    });
  }
};

export const getSoftSkillById = async (req, res) => {
  try {
    const skill = await SoftSkill.findById({ _id: req.params.id }).exec();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download skill",
    });
  }
};
//post info
export const postSoftSkill = async (req, res) => {
  try {
    const skill = await new SoftSkill(req.body).save();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Add Soft Skill failed",
    });
  }
};

//remove info
export const removeSoftSkill = async (req, res) => {
  try {
    const skill = await SoftSkill.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(skill);
  } catch (error) {
    res.status(404).json({
      message: "Add Skill failed",
    });
  }
};

//put

export const putSoftSkill = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const skill = await SoftSkill.findByIdAndUpdate(condition, doc, option);
    res.json(skill);
  } catch (err) {
    res.status(404).json({ message: "Upload soft skill failed" });
  }
};
