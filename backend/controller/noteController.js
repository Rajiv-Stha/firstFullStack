const noteModel = require("../models/noteModel");

const getNotes = async (req, res, next) => {
  try {
    const allNotes = await noteModel.find({});
    res.status(200).json({ message: allNotes, success: true });
  } catch (error) {
    next(error);
  }
};
const postNotes = async (req, res, next) => {
  try {
    const createNote = await noteModel.create(req.body);
    res.status(200).json({ message: createNote, success: true });
  } catch (error) {
    next(error);
  }
};
const deleteNotes = async (req, res, next) => {
  try {
    const del = await noteModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: del, success: true });
  } catch (error) {
    next(error);
  }
};
const updateNotes = async (req, res, next) => {
  try {
    const editNotes = await noteModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      {
        returndocument: true,
        new: true,
      }
    );
    res.status(200).json({ message: editNotes, success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { getNotes, postNotes, deleteNotes, updateNotes };
