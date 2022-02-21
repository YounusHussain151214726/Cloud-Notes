const express = require("express");
const router = express.Router();
const Fetchuser = require("../Middleware/Fetchuser");
const notemodal = require("../modules/NotesSchema");

const fetchnotes = router.get("/fetchnotes", Fetchuser, async (req, res) => {
  try {
    const notes = await notemodal.find({ user: req.user.id });
    res.json(notes);
    console.log(notes);
  } catch (error) {
    res.send(error);
  }
});

const Addnotes = router.post("/Addnotes", Fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = new notemodal({
      title,
      description,
      tag,
      user: req.user.id,
    });
    console.log(req.user.id);

    const savednotes = await newNote.save();
    res.send(savednotes);
  } catch (error) {
    res.send(error);
  }
});

const updatenotes = router.put(
  "/updatenotes/:id",
  Fetchuser,
  async (req, res) => {
    const { title, description, tag } = req.body;

    try {
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      let note = await notemodal.findById(req.params.id);
      if (!note) {
        return res.status(400).send("Nots Found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }

      note = await notemodal.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.send(note);

      res.send(id, req.params.id);

      res.json(note);
    } catch (error) {
      res.send(error.message);
    }
  }
);

const deletenotes = router.delete(
  "/deletenotes/:id",
  Fetchuser,
  async (req, res) => {

    try {
      let note = await notemodal.findById(req.params.id);
      if (!note) {
        return res.send("not Found");
      }

      if (note.user.toString() !== req.user.id) {
        return res.send("Not Allowed");
      }
note = await notemodal.findByIdAndDelete(req.params.id)
      res.send({ "Success ": "note delete" , note : note  });
    } catch (error) {
      res.send(error.message);
    }
  }
);

module.exports = { fetchnotes, Addnotes, updatenotes, deletenotes };
