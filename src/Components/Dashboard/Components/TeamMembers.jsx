import React, { useState } from "react";
import { FiUserPlus, FiTrash2, FiMail, FiSend } from "react-icons/fi";
import { TfiCrown } from "react-icons/tfi";
import toast from "react-hot-toast";
import InviteMemberModal from "../../Modal/InviteMemberModal";
import AddMemberModalByAdmin from "./AddMemberModalByAdmin";

// Mock data for demonstration
const initialMembers = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    email: "naruto@konoha.com",
    avatar: "https://i.imgur.com/9pNffkj.png",
    role: "Admin",
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    email: "sasuke@konoha.com",
    avatar: "https://i.imgur.com/Iu2gs0O.png",
    role: "Member",
  },
  {
    id: 3,
    name: "Sakura Haruno",
    email: "sakura@konoha.com",
    avatar: "https://i.imgur.com/5zTq4pE.png",
    role: "Member",
  },
];

function TeamMembers() {
  const [members, setMembers] = useState(initialMembers);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);

  const handleRemoveMember = (memberId) => {
    setMembers(members.filter((member) => member.id !== memberId));
    toast.success("Member removed from team.");
  };

  const handleAddMember = (newUser) => {
    if (!members.some((m) => m.id === newUser.id)) {
      setMembers([...members, { ...newUser, role: "Member" }]);
      toast.success(`${newUser.name} was successfully added to the team!`);
    } else {
      toast.error(`${newUser.name} is already a member of this team.`);
    }
  };

  const handleInviteMember = (invitation) => {
    console.log("Sending invitation to:", invitation);
    // The success toast and link generation are handled inside the modal
  };

  return (
    <>
      <div className="text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Team Members</h1>
            <p className="mt-1 text-gray-400">
              Manage who has access to this workspace.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setAddModalOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              <FiUserPlus />
              Add Member
            </button>
            <button
              onClick={() => setInviteModalOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              <FiSend />
              Invite Member
            </button>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-700">
            {members.map((member) => (
              <li
                key={member.id}
                className="p-4 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-700"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{member.name}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-1.5">
                      <FiMail size={14} />
                      <span className="truncate">{member.email}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  {member.role === "Admin" ? (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-yellow-400 bg-yellow-900/50 px-2 py-1 rounded-full">
                      <TfiCrown />
                      {member.role}
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-gray-300 bg-gray-700 px-2 py-1 rounded-full">
                      {member.role}
                    </span>
                  )}
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label={`Remove ${member.name}`}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AddMemberModalByAdmin
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
      <InviteMemberModal
        isOpen={isInviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
      />
    </>
  );
}

export default TeamMembers;
