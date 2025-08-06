import React, { useState, useEffect, useContext } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaRegCommentDots,
} from "react-icons/fa";
import UserSearch from "./Dashboard/Components/UserSearch";
import CollapsibleSection from "./Dashboard/Components/CollapsibleSection";
import ChatItem from "./Dashboard/Components/ChatItem";
import { createOneToOneChat } from "../Service/Operation/GroupService";
import AuthContext from "../Context/AuthContext";
import { useParams } from "react-router-dom";

const directMessages = [
  {
    id: "user-1",
    name: "Alice Williams",
    avatar: "https://picsum.photos/seed/alice/200",
    lastMessage: "Hey, did you get a chance to look at the report I sent?",
    timestamp: "11:30 AM",
    isOnline: true,
  },
  {
    id: "user-2",
    name: "Ben Carter",
    avatar: "https://picsum.photos/seed/ben/200",
    lastMessage: "Awesome! I'll see you there. Can't wait.",
    timestamp: "11:28 AM",
    isOnline: false,
  },
];

function SideBar({ onUserSelect, selectedUser, name, groupData }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formattedGroups, setFormattedGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [userData, setUserData] = useState(directMessages);

  const { teamId } = useParams();

  const context = useContext(AuthContext);

  const { token } = context;
  const senderId = context?.user;

  useEffect(() => {
    if (Array.isArray(groupData)) {
      const normalizedGroups = groupData.map((group) => ({
        id: group.groupId,
        name: group.groupName,
        avatar:
          group.profileImageURL ||
          `https://placehold.co/40x40/1A202C/FFFFFF?text=${group.groupName.charAt(
            0
          )}`,
        lastMessage: "No recent messages",
        timestamp: "",
        isGroup: true,
      }));
      setFormattedGroups(normalizedGroups);
    }
  }, [groupData]);

  const handleStartChat = async (user) => {
    console.log("Starting chat with:", user);
    const receiverId = user.id;
    try {
      const response = await createOneToOneChat(
        teamId,
        senderId,
        receiverId,
        token
      );
      setIsSearching(false);
      console.log("response : " + response);
      if (response.status === 200) {
        onUserSelect(user);
      }
    } catch (error) {
      setIsSearching(false);
      console.error(error);
    } finally {
      setIsSearching(false);
    }
    setUserData((prevData) => {
      if (!prevData.includes(user.id)) {
        return [...prevData, user];
      } else {
        return prevUsers;
      }
    });
  };

  const handleAddMember = async (user) => {
    console.log("Adding member:", user);
    setUserData((prevUsers) => {
      if (!prevUsers.some((u) => u.id === user.id)) {
        return [...prevUsers, user];
      }
      return prevUsers;
    });
    setIsSearching(false);
    onUserSelect(user);
  };

  console.log("groupData : " + JSON.stringify(groupData));

  return (
    <div
      className={`h-full bg-gray-900 text-white flex flex-col border-r border-gray-700 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-full md:w-80" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center">
          <FaRegCommentDots className="text-2xl text-cyan-400 flex-shrink-0" />
          <h1
            className={`font-bold text-xl ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Chats
          </h1>
        </div>
        <h2
          className={`font-semibold text-md text-gray-400 whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          {name}
        </h2>
      </div>

      <div className="flex-grow p-2 space-y-2 overflow-y-auto">
        <CollapsibleSection title="GROUPS" isSidebarExpanded={isExpanded}>
          {formattedGroups.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              onSelect={onUserSelect}
              selectedChat={selectedUser}
              isSidebarExpanded={isExpanded}
            />
          ))}
        </CollapsibleSection>

        <CollapsibleSection
          title="DIRECT MESSAGES"
          isSidebarExpanded={isExpanded}
          onSearchClick={() => setIsSearching(!isSearching)}
        >
          {userData.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              onSelect={onUserSelect}
              selectedChat={selectedUser}
              isSidebarExpanded={isExpanded}
              setUserData={setUserData}
            />
          ))}
        </CollapsibleSection>

        {isSearching && isExpanded && (
          <UserSearch
            onUserSelect={handleStartChat}
            handleAddMember={handleAddMember}
          />
        )}
      </div>

      <div className="p-4 border-t border-gray-700 flex-shrink-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center p-2 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
        >
          {isExpanded ? (
            <FaArrowAltCircleLeft className="text-xl flex-shrink-0" />
          ) : (
            <FaArrowAltCircleRight className="text-xl flex-shrink-0" />
          )}
          <span
            className={`font-semibold ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
