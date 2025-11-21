import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import NoteModal from "../components/NoteModal";
import ReadMoreModal from "../components/ReadMoreModal";
import axios from "axios";
import toast from "react-hot-toast";
import NoNotes from "../components/NoNotes";
import NoteList from "../components/NoteList";
import EditNoteModal from "../components/EditNoteModal";

const API = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  // NEW: Read More Modal States
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = async (note) => {
    try {
      const res = await axios.post(`${API}/note/notes`, note, {
        withCredentials: true,
      });

      console.log(res.data);

      setNotes((prevNotes) => [...prevNotes, res.data.note]);
      toast.success("Note saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save note");
    }
  };

  const getNotes = async () => {
    try {
      const res = await axios.get(`${API}/note/notes`, {
        withCredentials: true,
      });

      setNotes(res.data.getNote);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load Notes 😢");
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = async (noteId, updatedData) => {
    try {
      const res = await axios.put(`${API}/note/notes/${noteId}`, updatedData, {
        withCredentials: true,
      });

      setNotes((prev) =>
        prev.map((item) =>
          item._id === noteId ? { ...item, ...res.data.note } : item
        )
      );

      toast.success("Note updated successfully!");
      setEditOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update note");
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${API}/note/notes/${noteId}`, {
        withCredentials: true,
      });

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the note");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-1">
                All Notes
              </h2>
              <p className="text-gray-600">You have {notes.length} notes</p>
            </div>

            {/* New Note Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors z-50"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>

          {/* Notes Grid */}
          {notes.length == 0 ? (
            <NoNotes isOpen={() => setModalOpen(true)} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {notes.map((note) => (
                <NoteList
                  notes={note}
                  setSelectedNote={setSelectedNote}
                  setReadMoreOpen={setReadMoreOpen}
                  deleteNote={deleteNote}
                  onEdit={() => {
                    setEditingNote(note);
                    setEditOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Add New Note Modal */}
      <NoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addNote}
      />

      {/* READ MORE MODAL */}
      <ReadMoreModal
        isOpen={readMoreOpen}
        onClose={() => setReadMoreOpen(false)}
        note={selectedNote}
      />

      <EditNoteModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        note={editingNote}
        onUpdate={(data) => updateNote(editingNote._id, data)}
      />
    </div>
  );
};

export default Dashboard;
