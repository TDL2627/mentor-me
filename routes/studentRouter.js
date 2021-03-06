require("dotenv").config;
const auth = require("../middleware/auth");
const express = require("express");
const Student = require("../models/student");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getStudent } = require("../middleware/finders");
const router = express.Router();


// GET all students
router.get("/", async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });


//  GET one student
  router.get("/:id", getStudent, (req, res, next) => {
    res.send(res.student);
  });

  // GET ONE STUDENT 2.0
router.get("/1/", auth, async (req, res, next) => {
  try {
    const student = await Student.findBy(req.student._id)
  res.status(201).json(student)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  // REGISTER a student
router.post("/", async (req, res, next) => {
    const { name, email, contact, password,  avatar, subject,role } = req.body;
  
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const student = new Student({
      name,
      email,
      contact,
      avatar,
      subject,
      role,
      password: hashedPassword,
    });
  
    try {
      const newStudent = await student.save();
  
      try {
        const access_token = jwt.sign(
          JSON.stringify(newStudent),
          process.env.JWT_SECRET_KEY
        );
        res.status(201).json({jwt: access_token, student});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

// UPDATE a student
router.put("/:id", getStudent, async (req, res, next) => {
    const { name, contact, password, avatar, about } = req.body;
    if (name) res.student.name = name;
    if (contact) res.student.contact = contact;
    if (avatar) res.student.avatar = avatar;
    if (about) res.student.about = about;
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      res.student.password = hashedPassword;
    }
    try {
      const updatedStudent = await res.student.save();
      res.status(201).send(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // DELETE a student
router.delete("/:id", getStudent, async (req, res, next) => {
    try {
      await res.student.remove();
      res.json({ message: "Deleted student" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  // LOGIN student with email + password
router.patch("/", async (req, res, next) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
 
    if (!student) res.status(404).json({ message: "Could not find student" });
    if (await bcrypt.compare(password, student.password)) {
      try {
        const access_token = jwt.sign(
          JSON.stringify(student),
          process.env.JWT_SECRET_KEY
        );


        res.status(201).json({ jwt: access_token , student });
      } catch (error) {
        res.status(500).json({ message: error.message }); 
      }
    } else {
      res
        .status(400)
        .json({ message: "Email and password combination do not match" });
    }
  });

  
  // LOGIN student with email + password
router.patch("/admin", async (req, res, next) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });

  if (!student) res.status(404).json({ message: "Could not find admin" });
  if (await bcrypt.compare(password, student.password)) {
    try {
      const access_token = jwt.sign(
        JSON.stringify(student),
        process.env.JWT_SECRET_KEY
      );


      res.status(201).json({ jwt: access_token , student });
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  } else {
    res
      .status(400)
      .json({ message: "Email and password combination do not match" });
  }
});


  

module.exports = router;