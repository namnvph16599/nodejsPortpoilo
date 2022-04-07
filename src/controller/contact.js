import Contact from "../model/contact";

//get all contacts

export const getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find().exec();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Can't list contacts" });
  }
};
//get contact by id
export const getContact = async (req, res) => {
  try {
    const result = await Contact.findById({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Can't find contact" });
  }
};

//post contact
export const postContact = async (req, res) => {
  try {
    const result = await new Contact(req.body).save();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Add contact failed" });
  }
};
