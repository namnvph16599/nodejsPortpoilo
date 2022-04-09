import Info from "../model/info";


//get all info
export const getInfo = async (req, res) => {
  try {
    const info = await Info.find().exec();
    res.json(info);
  } catch (error) {
    res.status(404).json({
      message: "Unable to download info",
    });
  }
};

export const getInfoId = async (req, res) => {
  try {
    const info = await Info.findById({ _id: req.params.id}).exec();
    res.json(info);
  } catch (error) {
    res.status(404).json({
      message: "Get info by id failed",
    });
  }
};
//post info
export const postInfo = async (req, res) => {
  try {
    const info = await new Info(req.body).save();
    res.json(info);
  } catch (error) {
    res.status(404).json({
      message: "Add info failed",
    });
  }
};

//remove info
export const removeInfo = async (req, res) => {
  try {
    const info = await Info.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(info);
  } catch (error) {
    res.status(404).json({
      message: "Add info failed",
    });
  }
};

//put

export const putInfo = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const info = await Info.findByIdAndUpdate(condition, doc, option);
    res.json(info);
  } catch (err) {
    res.status(404).json({ message: "Upload failed" });
  }
};
