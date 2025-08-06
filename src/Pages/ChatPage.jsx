import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

import SideBar from "../Components/SideBar";
import Chat from "../Components/Chat";
import CreateGroupModal from "../Components/Modal/CreateGroupModal";
import TeamContext from "../Context/TeamContext";
import AuthContext from "../Context/AuthContext";
import {
  createGroupAPI,
  getGroupsAPI,
} from "../Service/Operation/GroupService";

import avtar from "../assets/naruto_avtar.png";
import { sideIcons } from "../Utills/constants";

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [groupData, setGroupData] = useState([]);

  const navigate = useNavigate();
  const { teamId, userId } = useParams();
  const { token } = useContext(AuthContext);
  const { teamData } = useContext(TeamContext);

  async function getGroups() {
    try {
      const response = await getGroupsAPI(token, teamId);

      if (response.status === 200) {
        setGroupData(response?.data?.data?.data || []);
      }
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  }

  useEffect(() => {
    getGroups();
  }, [teamId]); // Refetch if the teamId changes

  async function handleCreateGroup(newGroup) {
    const toastId = toast.loading("Creating group...");
    try {
      const response = await createGroupAPI(newGroup, token);
      toast.dismiss(toastId);
      if (response.status === 201) {
        toast.success("Group created successfully!");
        setShowModal(false);
        getGroups();
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Failed to create group.");
      console.error("Error creating group:", error);
    }
  }

  console.log("teamData : " + JSON.stringify(teamData));

  return (
    <>
      <div className="flex h-screen w-full bg-gray-800">
        <aside className="w-20 bg-gray-900 p-4 shadow-md flex flex-col justify-between items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 shadow-lg cursor-pointer">
              <Link to="/dashboard/profile">
                <img
                  src={teamData?.teamImageUrl || avtar}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>

            {sideIcons.map((item) => {
              const IconComponent = item.Icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.action === "create_group") {
                      setShowModal(true);
                    }
                    if (item.link) {
                      navigate(item.link);
                    }
                  }}
                  className={`relative flex flex-col items-center transition duration-200 cursor-pointer ${
                    item.active
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  {item.active && (
                    <div className="absolute -left-4 h-full w-1 bg-cyan-400 rounded-r-full"></div>
                  )}
                  <span className="text-3xl">
                    <IconComponent />
                  </span>
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer">
            <span className="text-3xl">
              <FiLogOut />
            </span>
            <span className="text-xs mt-1">Logout</span>
          </div>
        </aside>

        <main className="flex-1 flex overflow-hidden">
          <div className="hidden md:flex md:flex-shrink-0">
            <SideBar
              onUserSelect={setSelectedUser}
              selectedUser={selectedUser}
              name={teamData?.teamName || "Shinobi World"}
              groupData={groupData}
            />
          </div>
          <div className="flex-1 h-full">
            <Chat activeChatUser={selectedUser} />
          </div>
        </main>
      </div>
      {showModal && (
        <CreateGroupModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onCreateGroup={handleCreateGroup}
          teamId={teamId}
          creatorId={userId}
        />
      )}
    </>
  );
}

export default ChatPage;
