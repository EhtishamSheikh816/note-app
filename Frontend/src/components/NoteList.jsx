import React from "react";
import { Trash2, Edit2, Pin } from "lucide-react";

const NoteList = ({
  notes,
  setSelectedNote,
  setReadMoreOpen,
  deleteNote,
  onEdit,
}) => {
  return (
    <div
      key={notes._id}
      className={`${notes.color} rounded-2xl p-5 shadow-md hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer group`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800 text-lg line-clamp-1">
          {notes.title}
        </h3>
        <button className="opacity-0 sm:group-hover:opacity-100 transition-opacity p-1 hover:bg-white/50 rounded">
          <Pin className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <p className="text-sm text-gray-700 line-clamp-2">{notes.content}</p>
      {/* READ MORE BUTTON */}
      <button
        onClick={() => {
          setSelectedNote(notes);
          setReadMoreOpen(true);
        }}
        className="text-xs text-blue-600 hover:underline"
      >
        Read More
      </button>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {new Date(notes.createdAt).toLocaleDateString()}
        </span>

        <div className="flex space-x-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="p-2 hover:bg-white/50 rounded transition-colors"
          >
            <Edit2 className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={() => deleteNote(notes._id)}
            className="p-2 hover:bg-white/50 rounded transition-colors"
          >
            <Trash2 className="w-5 h-5 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
