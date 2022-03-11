require("dotenv").config;

const express = require("express");
const Note = require("../models/note");
const auth = require("../middleware/auth");
const { getNote, getStudent } = require("../middleware/finders");

const router = express.Router();

// GET all notes
router.get("/", auth, async (req, res) => {
    try {
      const notes = await Note.find();
      res.status(201).send(notes);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  // GET one note
router.get("/:id", [auth, getNote], (req, res, next) => {
    res.send(res.note);
  });

// CREATE a note
router.post("/", auth, async (req, res, next) => {
    const { title, body } = req.body;
    let note;
     (note = new Note({
          title,
          body,
          author: req.student._id,
        
        }))
    try {
      const newNote = await note.save();
      res.status(201).json(newNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

//   edit note
router.put("/:id", [auth, getNote], async (req, res, next) => {
    if (req.student._id !== res.note.author)
      res
        .status(400)
        .json({ message: "You do not have the permission to update this product" });
    const { name, price, category, img } = req.body;
    if (name) res.product.name = name;
    if (price) res.product.price = price;
    if (category) res.product.category = category;
    if (img) res.product.img = img;
  
    try {
      const updatedProduct = await res.product.save();
      res.status(201).send(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  module.exports = router;