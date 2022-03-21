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
router.get("/:id",  getNote , (req, res, next) => {
    res.send(res.note);
  });

// CREATE a note 
router.post("/", auth, async (req, res, next) => {
    const { title, body } = req.body;
    let note;
(  note = new Note({
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
router.put("/:id",  getNote, async (req, res, next) => {
    
    const { title, body } = req.body;
    if (title) res.note.title = title;
    if (body) res.note.body = body;
    try {
      const updatedNote = await res.note.save();
      res.status(201).send(updatedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // delete note
  router.delete("/:id", [auth, getNote], async (req, res, next) => {
    if (req.student._id !== res.note.author)
      res
        .status(400)
        .json({ message: "You do not have the permission to delete this note" });
    try {
      await res.note.remove();
      res.json({ message: "Deleted note" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 

  module.exports = router;