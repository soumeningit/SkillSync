import React, { useState, useEffect, useContext } from "react";
import { FiSearch, FiLoader, FiMessageSquare } from "react-icons/fi";
import { searchUsersAPI } from "../../../Service/Operation/GroupService";
import AuthContext from "../../../Context/AuthContext";

// --- Mock Data and API Simulation ---
const allUsers = [
  {
    id: "user-3",
    name: "Sakura Haruno",
    avatar: "https://i.imgur.com/5zTq4pE.png",
  },
  {
    id: "user-4",
    name: "Kakashi Hatake",
    avatar: "https://i.imgur.com/9vMhLzL.png",
  },
  {
    id: "user-5",
    name: "Hinata Hyuga",
    avatar: "https://i.imgur.com/urtf2Gf.png",
  },
];

function UserSearch({ onUserSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const context = useContext(AuthContext);

  const { token } = context;
  const { user } = context;

  // console.log("inside user search user : " + user + " token : " + token);

  const handleSearchUsers = async (query) => {
    try {
      const response = await searchUsersAPI(query, token, user);
      return response.data;
    } catch (error) {
      console.error("Error searching users:", error);
      return [];
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (searchQuery.trim() !== "") {
        setIsLoadingSearch(true);
        const response = await handleSearchUsers(searchQuery);
        console.log("Search results:", response);
        setSearchResults(response?.data?.data || []);
        setIsLoadingSearch(false);
      } else {
        setSearchResults([]);
      }
    }, 400);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div className="p-2">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-700 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        />
      </div>
      {isLoadingSearch ? (
        <div className="flex justify-center p-4">
          <FiLoader className="animate-spin text-cyan-400" />
        </div>
      ) : (
        <div className="mt-2 max-h-[55%] overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={
                      user.avatar ||
                      `https://placehold.co/40x40/667EEA/FFFFFF?text=${user?.name}`
                    }
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm">{user.name}</span>
                    <span className="text-sm">{user.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => onUserSelect(user)}
                  className="text-gray-400 hover:text-green-400 cursor-pointer"
                >
                  <FiMessageSquare />
                </button>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No users found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserSearch;
