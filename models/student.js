const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: null,
  },

  joinDate: {
    type: Date,
    required: true,
    default: Date.now,
  }
  
});

module.exports = mongoose.model("Student", studentSchema);
