import React, { useState, useEffect } from "react";
import { FiX, FiUserPlus, FiLogOut, FiEdit, FiArrowLeft } from "react-icons/fi";
import { TfiCrown } from "react-icons/tfi";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UpdateGroupImageModal from "../../Modal/UpdateGroupImageModal";
import UserSearch from "./UserSearch";

function GroupInfoDrawer({ isOpen, onClose, groupData, groupMembersData }) {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    if (Array.isArray(groupMembersData)) {
      setGroupMembers(groupMembersData);
    }
  }, [groupMembersData]);

  const handleImageUpdate = (file) => {
    console.log("New image file to upload:", file);
  };

  const handleAddMember = (newUser) => {
    if (!groupMembers.some((member) => member.userId === newUser.userId)) {
      setGroupMembers([...groupMembers, { ...newUser, groupRole: "member" }]);
    } else {
      console.log("User is already in the group.");
    }
    setIsSearching(false);
  };

  const handleRemoveMember = (memberId) => {
    setGroupMembers(
      groupMembers.filter((member) => member.userId !== memberId)
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white shadow-lg z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-96 border-l border-gray-700 flex flex-col`}
        style={{ maxWidth: "100vw" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
          {isSearching ? (
            <button
              onClick={() => setIsSearching(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer"
            >
              <FiArrowLeft />
              <h2 className="text-xl font-bold">Add Member</h2>
            </button>
          ) : (
            <h2 className="text-xl font-bold">Group Info</h2>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        {isSearching ? (
          <div className="p-4">
            <UserSearch onUserSelect={handleAddMember} actionButtonIcon="add" />
          </div>
        ) : (
          <>
            <div className="p-6 text-center flex-shrink-0">
              <div className="relative w-24 h-24 mx-auto mb-4 group">
                <img
                  src={groupData.avatar}
                  alt={groupData.name}
                  className="w-full h-full rounded-full object-cover border-4 border-gray-700"
                  style={{ minWidth: 96, minHeight: 96, background: "#222" }}
                />
                <button
                  onClick={() => setUpdateModalOpen(true)}
                  className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  aria-label="Update group image"
                  style={{ transition: "opacity 0.2s" }}
                >
                  <FiEdit size={24} />
                </button>
              </div>
              <h3 className="text-2xl font-bold break-words">
                {groupData.name}
              </h3>
              <p className="text-gray-400">{groupMembers.length} Members</p>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
              <h4 className="font-semibold mb-2 px-2">Members</h4>
              <ul className="space-y-2">
                {groupMembers.map((member) => (
                  <li
                    key={member.userId}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={
                          member.avatar ||
                          `https://placehold.co/40x40/667EEA/FFFFFF?text=${member.name}`
                        }
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover bg-gray-700"
                      />
                      <span className="font-medium truncate">
                        {member.name}
                      </span>
                    </div>
                    {member.groupRole === "admin" ? (
                      <TfiCrown className="text-yellow-400" title="Admin" />
                    ) : (
                      <button
                        onClick={() => handleRemoveMember(member.userId)}
                        className="text-xs bg-red-800/50 text-red-400 hover:bg-red-800/80 px-2 py-1 rounded-md cursor-pointer transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* --- ACTION BUTTONS (UPDATED LAYOUT) --- */}
            <div className="p-4 border-t border-gray-700 flex gap-3">
              <button
                onClick={() => setIsSearching(true)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              >
                <FiUserPlus />
                Add Member
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer">
                <FiLogOut />
                Leave Group
              </button>
            </div>
          </>
        )}
      </div>

      <UpdateGroupImageModal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        onUpdate={handleImageUpdate}
      />
    </DndProvider>
  );
}

export default GroupInfoDrawer;
