import { FiX, FiCheckCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import UserSearch from "../Dashboard/Components/UserSearch";
import { useState } from "react";

function AddMemberModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addedUser, setAddedUser] = useState(null);

  const handleUserSelect = async (user) => {
    const toastId = toast.loading("Adding member...");
    try {
      // In a real app, you would make an API call here to add the user.
      console.log("Adding user to team:", user);
      setAddedUser(user);
      setIsSubmitted(true); // Switch to the success view
    } catch (error) {
      console.error("Error adding member:", error);
      toast.error("Could not add member. Please try again.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setAddedUser(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">
            {isSubmitted ? "Success" : "Add Existing Member"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        {!isSubmitted ? (
          // --- Search View ---
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-4">
              Search for a user who is already on the platform to add them to
              your team.
            </p>
            <UserSearch
              onUserSelect={handleUserSelect}
              actionButtonIcon="add"
            />
          </div>
        ) : (
          // --- Success View ---
          <div>
            <div className="p-6 text-center">
              <FiCheckCircle className="mx-auto text-green-400 h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Member Added!</h3>
              <p className="text-gray-400 mt-2">
                <span className="font-bold text-white">{addedUser?.name}</span>{" "}
                has been successfully added to the team.
              </p>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-700">
              <button
                onClick={handleClose}
                className="bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddMemberModal;
