import React, { useState, createContext, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiUser,
  FiSettings,
  FiGrid,
  FiChevronLeft,
  FiChevronRight,
  FiLogOut,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiFolderUserBold } from "react-icons/pi";
import AuthContext from "../../../Context/AuthContext";
import LogoutModal from "../../Modal/LogoutModal";

const SidebarContext = createContext();

export default function SideDrawer() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const context = useContext(AuthContext);

  // Mock data for demonstration, replace with actual context data
  const id = 14;
  const user = context.user;

  const sidebarItems = [
    { id: "it01", name: "Home", icon: <FaHome size={20} />, path: "/" },
    {
      id: "it02",
      name: "Activity",
      icon: <FiGrid size={20} />,
      path: "/dashboard/activity",
    },
    {
      id: "it03",
      name: "Task",
      icon: <BsGraphUpArrow size={20} />,
      path: "/dashboard/task",
    },
    {
      id: "it04",
      name: "Profile",
      icon: <FiUser size={20} />,
      path: `/dashboard/profile/${user}`,
    },
    {
      id: "it05",
      name: "Settings",
      icon: <FiSettings size={20} />,
      path: "/dashboard/settings",
    },
    {
      id: "it06",
      name: "Chat",
      icon: <IoChatboxEllipsesOutline size={20} />,
      path: `/chat-page/${id}/chat/${user}`,
    },
    {
      id: "it07",
      name: "Create Workspace",
      icon: <VscWorkspaceTrusted size={20} />,
      path: "/dashboard/create-workspace",
    },
    {
      id: "it08",
      name: "Team Members",
      icon: <PiFolderUserBold size={20} />,
      path: `/dashboard/team-members/${id}`,
    },
  ];

  return (
    <>
      <aside className="h-screen sticky top-0">
        <nav
          className={`relative flex flex-col bg-gray-800 shadow-lg h-full p-4 transition-all duration-300 ease-in-out ${
            isExpanded ? "w-64" : "w-20"
          }`}
        >
          {/* Header */}
          <div className="flex items-center mb-8 pl-1">
            <Link
              to="/dashboard/profile"
              className={`flex items-center gap-2 ${
                isExpanded ? "" : "justify-center w-full"
              }`}
            >
              <CgProfile className="h-8 w-8 flex-shrink-0 text-cyan-500" />
              <span
                className={`font-bold text-xl text-white overflow-hidden transition-all ${
                  isExpanded ? "w-32" : "w-0"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-3 top-9 z-10 p-1.5 bg-gray-700 rounded-full shadow-md border border-gray-600 text-gray-300 hover:bg-gray-600 transition-all cursor-pointer"
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? <FiChevronLeft /> : <FiChevronRight />}
          </button>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <SidebarContext.Provider value={{ isExpanded }}>
              <ul className="space-y-2">
                {sidebarItems.map((item) => (
                  <SidebarItem key={item.id} item={item} />
                ))}
              </ul>
            </SidebarContext.Provider>
          </div>

          {/* Footer: User Profile and Logout */}
          <div className="border-t border-gray-700 pt-4">
            <Link
              to={`/dashboard/profile/${user}`}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <img
                src="https://placehold.co/40x40/667EEA/FFFFFF?text=N"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div
                className={`flex-1 overflow-hidden transition-all ${
                  isExpanded ? "w-32" : "w-0"
                }`}
              >
                <p className="text-sm font-semibold text-white truncate">
                  {user?.name || "Naruto Uzumaki"}
                </p>
                <p className="text-xs text-gray-400">View Profile</p>
              </div>
            </Link>

            {/* Logout Button */}
            <button
              onClick={() => setShowLogoutModal(true)}
              className="relative flex items-center w-full p-3 mt-2 rounded-lg transition-colors duration-200 group text-gray-300 hover:bg-red-900/50 hover:text-red-400 cursor-pointer"
            >
              <FiLogOut size={20} />
              <span
                className={`overflow-hidden transition-all ${
                  isExpanded ? "w-auto ml-1 p-0" : "w-0"
                }`}
              >
                Log Out
              </span>
              {!isExpanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red-800 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                  Log Out
                </div>
              )}
            </button>
          </div>
        </nav>
      </aside>
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </>
  );
}

function SidebarItem({ item }) {
  const { isExpanded } = useContext(SidebarContext);

  return (
    <li>
      <NavLink
        to={item.path}
        end={item.path === "/"}
        className={({ isActive }) =>
          `relative flex items-center p-3 my-1 rounded-lg transition-colors duration-200 group ${
            isActive
              ? "bg-gradient-to-tr from-blue-500 to-blue-600 text-white shadow-md"
              : "text-gray-300 hover:bg-gray-700"
          }`
        }
      >
        {item.icon}
        <span
          className={`overflow-hidden transition-all ${
            isExpanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {item.name}
        </span>
        {!isExpanded && (
          <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-blue-800 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
            {item.name}
          </div>
        )}
      </NavLink>
    </li>
  );
}
