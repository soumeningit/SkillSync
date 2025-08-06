import { useContext, useEffect, useRef, useState } from "react";
import {
  FaInfoCircle,
  FaPaperclip,
  FaPaperPlane,
  FaPhone,
  FaRegSmile,
  FaVideo,
} from "react-icons/fa";
import { SiImessage } from "react-icons/si";
import EmojiList from "./EmojiList";
import GroupInfoDrawer from "./Dashboard/Components/GroupInfoDrawer";
import { useParams } from "react-router-dom";
import { getGroupMembersAPI } from "../Service/Operation/GroupService";
import AuthContext from "../Context/AuthContext";

const initialMessages = [
  {
    id: 1,
    sender: "other",
    text: "Hey, how's it going?",
    timestamp: "11:25 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Hey Alice! I'm doing great, thanks. Just working on the new chat UI. How about you?",
    timestamp: "11:26 AM",
  },
  {
    id: 3,
    sender: "other",
    text: "That sounds exciting! I'm good, just reviewing the project proposal.",
    timestamp: "11:27 AM",
  },
  {
    id: 4,
    sender: "other",
    text: "Did you get a chance to look at the report I sent?",
    timestamp: "11:30 AM",
  },
];

function Chat({ activeChatUser }) {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isInfoDrawerOpen, setInfoDrawerOpen] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  const { teamId } = useParams();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    setMessages(initialMessages);
    setInfoDrawerOpen(false);
  }, [activeChatUser]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const message = {
      id: messages.length + 1,
      sender: "me",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, message]);
    setNewMessage("");
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    async function fetchGroupMembers() {
      // Check if the active chat is a group and has an ID
      if (activeChatUser?.isGroup && activeChatUser?.id) {
        console.log("Fetching group members for groupId:", activeChatUser.id);
        try {
          const response = await getGroupMembersAPI(
            teamId,
            activeChatUser.id,
            token
          );
          console.log("Group members response:", response);
          setGroupMembers(response.data || []);
        } catch (error) {
          console.error("Failed to fetch group members:", error);
        }
      }
    }

    fetchGroupMembers();
  }, [activeChatUser, teamId, token]);

  if (!activeChatUser) {
    return (
      <div className="flex-1 flex items-center justify-center h-full bg-gray-800 text-gray-400">
        <div className="text-center">
          <SiImessage className="mx-auto text-5xl mb-4" />
          <h2 className="text-xl font-semibold">
            Select a chat to start messaging
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full bg-gray-800 text-gray-200">
      <div className="flex flex-col flex-1">
        {/* Chat Header */}
        <header className="flex items-center p-3 border-b border-gray-700 bg-gray-900 shadow-sm z-10 flex-shrink-0">
          <img
            src={activeChatUser.avatar}
            alt={activeChatUser.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-grow">
            <h2 className="font-bold text-lg text-white">
              {activeChatUser.name}
            </h2>
            <p
              className={`text-sm ${
                activeChatUser.isOnline ? "text-green-400" : "text-gray-400"
              }`}
            >
              {activeChatUser.isOnline ? "Online" : "Offline"}
            </p>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <button className="hover:text-cyan-400 transition-colors cursor-pointer">
              <FaPhone size={20} />
            </button>
            <button className="hover:text-cyan-400 transition-colors cursor-pointer">
              <FaVideo size={22} />
            </button>
            {activeChatUser.isGroup && (
              <button
                onClick={() => setInfoDrawerOpen(true)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <FaInfoCircle size={22} />
              </button>
            )}
          </div>
        </header>

        {/* Messages Area */}
        <main className="flex-grow p-4 md:p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-2xl p-3 rounded-2xl shadow-md ${
                    msg.sender === "me"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-700 text-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm break-words">{msg.text}</p>
                  <span
                    className={`text-xs mt-1 block text-right ${
                      msg.sender === "me" ? "text-blue-200" : "text-gray-500"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Message Input Footer */}
        <footer className="relative p-3 border-t border-gray-700 bg-gray-900 flex-shrink-0">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center space-x-3"
          >
            {showEmojiPicker && (
              <div className="absolute bottom-20 left-0 md:left-auto md:right-4 z-50">
                <EmojiList
                  setNewMessage={setNewMessage}
                  setShowEmojiPicker={setShowEmojiPicker}
                />
              </div>
            )}
            <button
              type="button"
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <FaRegSmile size={24} />
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              <FaPaperclip size={22} />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onFocus={() => setShowEmojiPicker(false)}
              placeholder="Type a message..."
              className="flex-grow p-3 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform transform active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed cursor-pointer"
              disabled={!newMessage.trim()}
            >
              <FaPaperPlane size={20} />
            </button>
          </form>
        </footer>
      </div>

      <GroupInfoDrawer
        isOpen={isInfoDrawerOpen}
        onClose={() => setInfoDrawerOpen(false)}
        groupData={activeChatUser}
        groupMembersData={groupMembers}
      />
    </div>
  );
}

export default Chat;
