import React, { useState, useEffect, useContext } from "react";
import { FiX, FiHash, FiAtSign } from "react-icons/fi";
import { searchUsersAPI } from "../../Service/Operation/GroupService";
import AuthContext from "../../Context/AuthContext";
import SearchChatUser from "../Dashboard/Components/SearchChatUser";

function CreateGroupModal({
  isOpen,
  onClose,
  onCreateGroup,
  creatorId,
  teamId,
}) {
  const [groupName, setGroupName] = useState("");
  const [groupSymbol, setGroupSymbol] = useState("#");
  const [members, setMembers] = useState([]);

  // State for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { token } = useContext(AuthContext);

  // Effect to perform search when query changes
  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      try {
        // --- API CALL INTEGRATED HERE ---
        const response = await searchUsersAPI(searchQuery, token);
        console.log("Search API Response:", response);
        // Ensure the response is an array before setting the state
        if (Array.isArray(response?.data?.data?.data)) {
          setSearchResults(response.data.data.data);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Failed to search for users:", error);
        setSearchResults([]); // Clear results on error
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      performSearch();
    }, 300); // Debounce to avoid searching on every keystroke

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleAddMember = (user) => {
    console.log("added user:", user);
    if (!members.some((member) => member.id === user.id)) {
      setMembers([...members, user]);
    }
  };

  const handleRemoveMember = (userId) => {
    setMembers(members.filter((member) => member.id !== userId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName) return;

    let name = groupSymbol + groupName;
    const newGroup = {
      groupName: name.trim(),
      teamId: teamId,
      symbol: groupSymbol,
      members: members.map((m) => m.id),
      creatorId: creatorId,
    };

    console.log("New Group Data:", newGroup);
    onCreateGroup(newGroup);
    // onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Create a New Group</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Group Name and Symbol */}
            <div>
              <label
                htmlFor="groupName"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Group Name
              </label>
              <input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="e.g., Design Team"
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Group Symbol
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setGroupSymbol("#")}
                  className={`p-2 rounded-md transition-colors ${
                    groupSymbol === "#"
                      ? "bg-blue-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  } cursor-pointer`}
                >
                  <FiHash />
                </button>
                <button
                  type="button"
                  onClick={() => setGroupSymbol("@")}
                  className={`p-2 rounded-md transition-colors ${
                    groupSymbol === "@"
                      ? "bg-blue-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  } cursor-pointer`}
                >
                  <FiAtSign />
                </button>
              </div>
            </div>

            {/* Search and Add Members */}
            <SearchChatUser
              isSearching={isSearching}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchResults={searchResults}
              handleAddMember={handleAddMember}
              handleRemoveMember={handleRemoveMember}
              members={members}
            />
          </div>
          <div className="flex justify-end p-4 border-t border-gray-700 gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGroupModal;
