import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import { FiX, FiUploadCloud } from "react-icons/fi";

function UpdateGroupImageModal({ isOpen, onClose, onUpdate }) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (item.files && item.files[0]) {
          const droppedFile = item.files[0];
          if (droppedFile.type.startsWith("image/")) {
            setFile(droppedFile);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(droppedFile);
          }
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (file) {
      onUpdate(file);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Update Group Image</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="p-6">
          <div
            ref={drop}
            className={`relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg transition-colors ${
              isOver && canDrop
                ? "border-blue-500 bg-gray-700/50"
                : "border-gray-600"
            }`}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <>
                <FiUploadCloud className="text-5xl text-gray-400 mb-2" />
                <p className="text-gray-400">Drag & drop an image here</p>
                <p className="text-xs text-gray-500">or</p>
              </>
            )}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
            <label
              htmlFor="file-upload"
              className="mt-2 font-semibold text-blue-500 hover:underline cursor-pointer"
            >
              Browse file
            </label>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t border-gray-700 gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!file}
            className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Update Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateGroupImageModal;
