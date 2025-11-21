import { MotionConfig, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

// REAL color hex codes
const colors = [
  { class: "bg-blue-100", hex: "#DBEAFE" },
  { class: "bg-purple-100", hex: "#EDE9FE" },
  { class: "bg-pink-100", hex: "#FCE7F3" },
  { class: "bg-green-100", hex: "#DCFCE7" },
  { class: "bg-yellow-100", hex: "#FEF9C3" },
  { class: "bg-orange-100", hex: "#FFE7D1" },
];

const EditNoteModal = ({ isOpen, onClose, onUpdate, note }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bg-blue-100");

  // Load previous note values
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setColor(note.color || "bg-blue-100");
    }
  }, [note]);

  if (!isOpen) return null;

  return (
    <MotionConfig reducedMotion="user">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Note</h2>

          <div className="space-y-4">
            {/* Title */}
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Content */}
            <textarea
              rows="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Color Picker */}
            <div>
              <p className="text-gray-700 font-medium mb-2">Choose Color</p>

              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c.class}
                    onClick={() => setColor(c.class)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      color === c.class
                        ? "border-black scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={() => onUpdate({ title, content, color })}
            className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Save Changes
          </button>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default EditNoteModal;
