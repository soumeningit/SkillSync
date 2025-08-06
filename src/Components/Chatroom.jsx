import React, { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FiPaperclip } from "react-icons/fi";

export default function ChatRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const fileInputRef = useRef(null);
  const stompClient = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }

    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        setConnected(true);
        stompClient.current = client;

        client.subscribe("/topic/public", (msg) => {
          const newMessage = JSON.parse(msg.body);
          setMessages((prev) => [...prev, newMessage]);
        });

        client.publish({
          destination: "/app/chat.addUser",
          body: JSON.stringify({ sender: username, type: "JOIN" }),
        });
      },
      onStompError: (frame) => {
        console.error("STOMP error:", frame);
      },
    });

    client.activate();

    return () => {
      if (client.active) client.deactivate();
    };
  }, [username, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && stompClient.current && connected) {
      stompClient.current.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify({
          sender: username,
          content: input,
          type: "CHAT",
        }),
      });
      setInput("");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    console.log("file : " + file);

    if (!file || !connected || !stompClient.current) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8080/upload", formData);

      console.log("File upload response:", res);
      console.log("File upload response:", JSON.stringify(res));

      const { url, name } = res.data;

      const fullUrl = `http://localhost:8080${url}`;
      console.log("File uploaded successfully:", fullUrl);

      stompClient.current.publish({
        destination: "/app/chat.fileMessage",
        body: JSON.stringify({
          sender: username,
          content: name,
          url: fullUrl,
          type: "FILE",
        }),
      });
    } catch (err) {
      console.error("File upload failed", err);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-purple-700 text-white p-4 text-lg font-bold shadow-md flex justify-between items-center">
        <span>Welcome, {username}</span>
        <label className="cursor-pointer px-3 py-1 bg-white text-purple-700 rounded-xl hover:bg-gray-200 flex items-center gap-2">
          <FiPaperclip className="text-lg" />
          File
          <input
            type="file"
            hidden
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
        </label>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-lg ${
              msg.type === "CHAT" || msg.type === "FILE"
                ? "bg-white text-gray-800 shadow"
                : "text-center text-sm text-purple-600"
            }`}
          >
            {msg.type === "CHAT" && (
              <span>
                <strong>{msg.sender}:</strong> {msg.content}
              </span>
            )}

            {msg.type === "FILE" &&
              (console.log("msg.url : " + msg.url),
              (
                <span>
                  <strong>{msg.sender}:</strong>{" "}
                  <a
                    href={`${msg.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    📎 {msg.content}
                  </a>
                </span>
              ))}

            {msg.type === "JOIN" && <em>{msg.sender} joined the chat</em>}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-3 border rounded-xl mr-2"
        />
        <button
          onClick={sendMessage}
          disabled={!connected}
          className={`px-4 py-2 rounded-xl text-white ${
            connected
              ? "bg-purple-600 hover:bg-purple-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}
