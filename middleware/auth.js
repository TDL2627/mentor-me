require("dotenv").config();
const jwt = require("jsonwebtoken");
const student = require("../models/student");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (!token || token == null)
    return res.status(401).send({ message: "Student not logged in" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, student) => {
    if (err) res.status(403).send({ message: err.message });
    req.student = student;
    return next();
  });
}

module.exports = authenticateToken;
