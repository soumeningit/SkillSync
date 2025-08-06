import React from "react";
import { FiPlus, FiSearch, FiLoader, FiX } from "react-icons/fi";

function SearchChatUser({
  isSearching,
  searchQuery,
  setSearchQuery,
  searchResults,
  handleAddMember,
  handleRemoveMember,
  members,
}) {
  return (
    <>
      {/* User Search and Invites */}
      <div>
        <label
          htmlFor="invites"
          className="block text-sm font-medium text-gray-400 mb-1"
        >
          Invite Members
        </label>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="invites"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for users..."
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isSearching && (
            <FiLoader className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 animate-spin" />
          )}
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-2 border border-gray-700 rounded-md max-h-40 overflow-y-auto">
            {searchResults.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-2 hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={
                      user.avatar || `https://i.pravatar.cc/150?u=${user.email}`
                    }
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-400">{user.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddMember(user)}
                  className="bg-blue-600 text-xs font-bold py-1 px-2 rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  <FiPlus />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Added Members */}
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-400">
            Added Members ({members.length})
          </h3>
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between bg-gray-700 text-sm p-1 px-2 rounded-md"
            >
              <div className="flex items-center gap-2">
                <img
                  src={
                    member.avatar ||
                    `https://i.pravatar.cc/150?u=${member.email}`
                  }
                  alt={member.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{member.name}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveMember(member.id)}
                className="text-gray-500 hover:text-red-400 cursor-pointer"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchChatUser;
