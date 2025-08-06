const ChatItem = ({ chat, onSelect, selectedChat, isSidebarExpanded }) => (
  <li
    onClick={() => onSelect(chat)}
    className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
      selectedChat?.id === chat.id ? "bg-blue-900/50" : "hover:bg-gray-700/50"
    }`}
  >
    <div className="relative flex-shrink-0">
      <img
        src={chat.avatar}
        alt={chat.name}
        className="w-10 h-10 rounded-full"
      />
      {chat.isOnline && !chat.isGroup && (
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-gray-900"></span>
      )}
    </div>
    <div
      className={`flex flex-col ml-3 w-full whitespace-nowrap overflow-hidden transition-all duration-200 ${
        isSidebarExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">{chat.name}</h3>
        <span className="text-xs text-gray-400">{chat.timestamp}</span>
      </div>
      <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
    </div>
  </li>
);

export default ChatItem;
