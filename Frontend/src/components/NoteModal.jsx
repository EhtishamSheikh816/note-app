import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

const colors = [
  "bg-blue-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-orange-100",
];

const NoteModal = ({ isOpen, onClose, onAdd }) => {
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      title: "",
      content: "",
      color: "bg-blue-100",
    },
  });

  const noteColor = watch("color");

  const handleAdd = (data) => {
    onAdd(data);
    reset({ title: "", content: "", color: "bg-blue-100" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold mb-4">New Note</h3>

        <form onSubmit={handleSubmit(handleAdd)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Content"
            rows={4}
            {...register("content", { required: true })}
            className="w-full mb-3 px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="mb-3 flex gap-2">
            {colors.map((color) => (
              <span
                key={color}
                onClick={() => setValue("color", color)}
                className={`${color} w-6 h-6 rounded-full cursor-pointer border-2 ${
                  noteColor === color ? "border-gray-800" : "border-transparent"
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-colors"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
