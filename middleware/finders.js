const Student = require("../models/student");

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


  module.exports = {getStudent}