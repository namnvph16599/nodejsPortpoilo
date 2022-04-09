import Resume from "../model/resume";
//get all Resume
export const getResume = async (req, res) => {
  try {
    const result = await Resume.find().exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download Resume",
    });
  }
};

export const getResumeById = async (req, res) => {
  try {
    const result = await Resume.findById({ _id: req.params.id}).exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download Resume",
    });
  }
};
//post Resume
export const postResume = async (req, res) => {
  try {
    const result = await new Resume(req.body).save();
    res.json(result);
  } catch (error) {
    res.status(404).json({
      message: "Add Resume failed",
    });
  }
};

//remove Resume
export const removeResume = async (req, res) => {
  try {
    const result = await Resume.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({
      message: "Add Resume failed",
    });
  }
};

//put

export const putResume = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const result = await Resume.findByIdAndUpdate(condition, doc, option);
    res.json(result);
  } catch (err) {
    res.status(404).json({ message: "Upload failed" });
  }
};
