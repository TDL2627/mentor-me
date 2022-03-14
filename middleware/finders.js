const Student = require("../models/student");
const Note = require("../models/note")

async function getStudent(req, res, next) {
    let student;
    try {
      student = await Student.findById(req.params.id);
  
      if (!student) res.status(404).json({ message: "Could not find student" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    res.student = student;
    next();
  }

  async function getNote(req, res, next) {
    let note;
    try {
      note = await Note.findById(req.params.id);
      if (!note) res.status(404).json({ message: "Could not find note" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    res.note = note;
    next();
  }

  module.exports = {getStudent, getNote}