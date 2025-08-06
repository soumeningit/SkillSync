import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import UserSearch from "./UserSearch";
import { useParams } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import { addUserToTeamAPI } from "../../../Service/Operation/TeamService";
import toast from "react-hot-toast";

function AddMemberModalByAdmin({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { teamId } = useParams();

  const context = useContext(AuthContext);

  const adminId = context.user;

  const { token } = context;

  const handleUserSelect = async (user) => {
    const data = {
      teamId,
      userId: user.id,
      adminId: adminId,
    };

    console.log("Adding member with data:", data);
    console.log("Selected user:", user);

    const toastId = toast.loading("Adding member...");
    try {
      const response = await addUserToTeamAPI(data, token);
      toast.dismiss(toastId);
      console.log("Response from adding member:", response);
      if (response.status === 200) {
        toast.success("Member added successfully!");
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.error(error);
    } finally {
      toast.dismiss(toastId);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Add New Member</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>
        {/* Search Component */}
        <div className="p-6">
          <UserSearch onUserSelect={handleUserSelect} actionButtonIcon="add" />
        </div>
      </div>
    </div>
  );
}

export default AddMemberModalByAdmin;
