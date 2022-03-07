require("dotenv").config;
const auth = require("../middleware/auth");
const express = require("express");
const Student = require("../models/student");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getStudent } = require("../middleware/finders");
const router = express.Router();


module.exports = router;