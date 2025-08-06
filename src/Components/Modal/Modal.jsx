import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

function Modal({ isOpen, heading, desc, btn1, btn2, onClose, onClick, icon }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md transform rounded-2xl bg-gray-800 text-white p-6 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {icon && (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 mb-4">
            {icon}
          </div>
        )}

        <h3 className="text-2xl font-bold">{heading}</h3>

        <p className="mt-2 text-md text-gray-400">{desc}</p>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={onClose}
            className="w-full rounded-md bg-gray-600 px-6 py-2.5 text-base font-medium shadow-sm transition-colors hover:bg-gray-700 sm:w-auto cursor-pointer"
          >
            {btn2}
          </button>

          <button
            onClick={() => {
              onClick();
              onClose();
            }}
            className="w-full rounded-md bg-blue-600 px-6 py-2.5 text-base font-medium shadow-sm transition-colors hover:bg-blue-700 sm:w-auto cursor-pointer"
          >
            {btn1}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
