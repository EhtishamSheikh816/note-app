import express from "express";

import tokenVerification from "../middleware/tokenVerification.js";
import {
  createNote,
  getNote,
  deleteNote,
  updateNote,
  deleteAllNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.post("/notes", tokenVerification, createNote);
router.get("/notes", tokenVerification, getNote);
router.delete("/notes/:id", tokenVerification, deleteNote);
router.put("/notes/:id", tokenVerification, updateNote);
router.delete("/allNotes", tokenVerification, deleteAllNote);

export default router;
