import React, { useContext, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
import AuthContext from "../../Context/AuthContext";
import { logoutUserAPI } from "../../Service/Operation/AuthService";
import { useNavigate } from "react-router-dom";

function LogoutModal({ isOpen, onClose }) {
  const context = useContext(AuthContext);
  const { removeToken } = context;

  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      const response = await logoutUserAPI();
      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("Logout successful");
        navigate("/");
        removeToken();
        onClose();
      } else {
        toast.error(response.data.message || "Logout failed");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md transform rounded-2xl bg-gray-800 text-white p-8 text-center shadow-xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-900/50">
          <FiLogOut className="h-8 w-8 text-red-400" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">Confirm Logout</h3>
        <p className="mt-2 text-md text-gray-400">
          Are you sure you want to log out of your account?
        </p>
        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onClose}
            className="w-full rounded-md bg-gray-600 px-6 py-3 text-base font-medium shadow-sm transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 sm:w-auto cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="w-full rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 sm:w-auto cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
