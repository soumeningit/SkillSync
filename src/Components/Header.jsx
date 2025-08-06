import React, { useContext, useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import ProfileDropDown from "./ProfileDropDown";
import avtar from "../assets/naruto_avtar.png";
import LogoutModal from "./Modal/LogoutModal";
import ProfileContext from "../Context/ProfileContext";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect outside clicks

  const context = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const { token, user } = context;

  console.log("profile : " + JSON.stringify(profileContext));

  const { profileData } = profileContext;

  console.log("profileData:", profileData);

  const navItems = [
    { name: "Features", path: "/features", id: "24sp5" },
    { name: "Testimonials", path: "/testimonials", id: "24sp6" },
    { name: "Pricing", path: "/pricing", id: "24sp7" },
    { name: "About", path: "/about-us", id: "24sp8" },
    { name: "Contact", path: "/contact-us", id: "24sp9" },
  ];

  // Effect to close dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <header className="bg-gray-900/80 backdrop-blur-md text-white p-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-2xl font-bold">SkillSync</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {token ? (
              // Container for the avatar and dropdown
              <div className="relative" ref={dropdownRef}>
                <button
                  id="user-menu-button"
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 shadow-lg cursor-pointer border-2 border-transparent hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400"
                >
                  <img
                    src={avtar}
                    alt="Profile"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/48x48/667EEA/FFFFFF?text=User";
                    }}
                  />
                </button>

                {/* Dropdown Menu with Transition */}
                <div
                  className={`transition-all duration-200 ease-out transform ${
                    isDropdownOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <ProfileDropDown
                    data={{ user, ...profileData }}
                    onClose={() => setDropdownOpen(false)}
                    onLogoutClick={() => setShowModal(true)}
                  />
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <FiLogIn />
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* The Logout Modal is rendered here but controlled from the dropdown */}
      <LogoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
