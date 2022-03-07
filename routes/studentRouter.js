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

module.exports = router;