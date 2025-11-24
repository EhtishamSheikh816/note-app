import Note from "../models/noteModel.js";

export const createNote = async (req, res) => {
  try {
    const { title, content, color } = req.body;

    if (!title || !content || !color) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const newNote = await Note.create({
      title,
      content,
      color,
      user: req.user.id,
    });

    res
      .status(201)
      .json({ success: true, message: "Note created", note: newNote });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

export const getNote = async (req, res) => {
  try {
    const getNote = await Note.find({ user: req.user.id });
    res.status(200).json({ success: true, getNote });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!note)
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    note.color = req.body.color || note.color;

    await note.save();

    res.status(200).json({ success: true, message: "Note updated", note });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found or unauthorized",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deleteAllNote = async (req, res) => {
  try {
    const result = await Note.deleteMany({ user: req.user.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No notes found to delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "All notes deleted successfully",
      deleted: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const togglePin = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Toggle pin
    note.isPinned = !note.isPinned;
    await note.save();

    res.status(200).json({
      success: true,
      message: note.isPinned ? "Note pinned" : "Note unpinned",
      note,
    });
  } catch (err) {
    console.error(err); // <-- check console for real error
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

export const searchNotes = async (req, res) => {
  try {
    const { query } = req.query; // ?query=something

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const notes = await Note.find({
      user: req.user.id,
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    }).sort({ isPinned: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
