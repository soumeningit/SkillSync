import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

function ProfileDropDown({ data, onClose, onLogoutClick }) {
  console.log("ProfileDropDown data:", data);

  const menuItems = [
    { id: 1, icon: <IoHomeOutline size={18} />, label: "Home", path: "/" },
    {
      id: 2,
      icon: <CgProfile size={18} />,
      label: "Profile",
      path: `/dashboard/profile/${data.user}`,
    },
    {
      id: 3,
      icon: <AiOutlineSetting size={18} />,
      label: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    // Main container with dark background and subtle border
    <div
      className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none z-40"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <div className="py-1" role="none">
        {/* User Info Section */}
        <div className="px-4 py-3 text-sm text-gray-200 border-b border-gray-700">
          <p className="font-semibold">{data.name}</p>
          <p className="text-gray-400 truncate">{data.email}</p>
        </div>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={onClose} // Close dropdown on navigation
            className="text-gray-300 flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-700 transition-colors"
            role="menuitem"
          >
            <span className="text-gray-400">{item.icon}</span>
            {item.label}
          </Link>
        ))}

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Logout Button */}
        <button
          onClick={() => {
            onLogoutClick();
            onClose();
          }}
          className="w-full text-left text-red-400 flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-700 transition-colors cursor-pointer"
          role="menuitem"
        >
          <span className="text-red-400">
            <FiLogOut size={18} />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDropDown;
