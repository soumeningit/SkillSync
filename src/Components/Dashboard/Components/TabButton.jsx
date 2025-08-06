function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-t-lg transition-colors ${
        active
          ? "bg-gray-700 text-white border-b-2 border-blue-500"
          : "text-gray-400 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

export default TabButton;
