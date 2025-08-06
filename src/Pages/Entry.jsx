import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Entry() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (username.trim()) {
      navigate("/chat", { state: { username } });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Join the Chat
        </h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none mb-4"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition cursor-pointer"
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default Entry;
