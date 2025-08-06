import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import appDemo from "../assets/AppDemo.mp4";

// --- Components ---

// Using inline SVGs as React components for better reusability
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// --- Interactive Demo Modal Component ---
const demoMessagesData = [
  {
    sender: "other",
    text: "Hey team, what's the status on the Q3 report?",
    avatar: "https://picsum.photos/seed/alice/100",
  },
  {
    sender: "me",
    text: "Just finished the final draft. I've uploaded it to the 'Reports' channel.",
    avatar: "https://i.imgur.com/9pNffkj.png",
  },
  {
    sender: "other",
    text: "Great! I'll review it now. @Ben can you start on the presentation slides?",
    avatar: "https://picsum.photos/seed/chloe/100",
  },
  {
    sender: "other",
    text: "On it! I'll use the new branding guidelines.",
    avatar: "https://picsum.photos/seed/ben/100",
  },
  {
    sender: "me",
    text: "Perfect. Let's sync up tomorrow at 10 AM to finalize everything.",
    avatar: "https://i.imgur.com/9pNffkj.png",
  },
];

const DemoModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const chatWindowRef = React.useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setMessages([]); // Reset messages when modal opens
      let i = 0;
      const interval = setInterval(() => {
        if (i < demoMessagesData.length) {
          setMessages((prev) => [...prev, demoMessagesData[i]]);
          i++;
        } else {
          clearInterval(interval);
          navigate("/");
        }
      }, 1800); // Add a new message every 1.8 seconds
      return () => {
        navigate("/");
        clearInterval(interval);
      };
    }
  }, [isOpen]);

  // Auto-scroll effect
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h3 className="text-xl font-bold text-white">
            SkillSync Interactive Demo
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <CloseIcon />
          </button>
        </div>
        <div
          ref={chatWindowRef}
          className="flex-grow p-6 overflow-y-auto space-y-4"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 animate-fade-in-up ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <img
                  src={msg.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div
                className={`max-w-md p-3 rounded-2xl shadow-md ${
                  msg.sender === "me"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-200 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
              {msg.sender === "me" && (
                <img
                  src={msg.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700 bg-gray-900 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="flex-grow p-3 bg-gray-700 text-gray-400 rounded-full">
              Type a message...
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <RocketIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Demo Page Component
export default function SkillSyncDemo() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                }
            `}</style>

      <div className="bg-gray-900 flex flex-col space-y-2 items-center justify-center h-screen">
        <div className="text-center ">
          <video
            src={appDemo}
            autoPlay
            muted
            loop
            className="w-[60rem] h-[35rem] mx-auto rounded-2xl shadow-2xl border-4 border-gray-700"
          />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 flex items-center gap-3">
          <Link to="/"> Go Back Home</Link>
        </button>

        <button
          onClick={() => setIsDemoOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 flex items-center gap-3"
        >
          <PlayIcon />
          Watch Interactive Demo
        </button>
        <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      </div>
    </>
  );
}
