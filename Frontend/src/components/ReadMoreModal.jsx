import { X } from "lucide-react";

const ReadMoreModal = ({ isOpen, onClose, note }) => {
  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div
        className={`${note.color} rounded-xl p-6 max-w-lg w-full relative shadow-xl`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-white/40 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-3 text-gray-800">{note.title}</h2>

        <p className="text-gray-700 whitespace-pre-wrap mb-4">{note.content}</p>

        <span className="text-xs text-gray-600">
          {new Date(note.createdAt).toLocaleString()}
        </span>

        {/* <button
          onClick={onClose}
          className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default ReadMoreModal;
