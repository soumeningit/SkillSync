import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FiEdit,
  FiMail,
  FiUser,
  FiBriefcase,
  FiCalendar,
  FiLoader,
} from "react-icons/fi";
import AuthContext from "../../../Context/AuthContext";
import ProfileContext from "../../../Context/ProfileContext";
import { getProfileDetailsAPI } from "../../../Service/Operation/ProfileService";
import avtar from "../../../assets/naruto_avtar.png";

function MyProfile() {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, token } = useContext(AuthContext);
  const { updateProfileData } = useContext(ProfileContext);

  const stats = [
    { label: "Projects", value: 42 },
    { label: "Tasks Done", value: 188 },
    { label: "Missions", value: "S-Rank" },
  ];

  useEffect(() => {
    const fetchProfileDetails = async () => {
      setLoading(true);
      try {
        const response = await getProfileDetailsAPI(userId, token);
        if (response.status === 200) {
          const data = response?.data?.data;
          setUserData(data);
          // Also update the context if needed
          updateProfileData({
            name: data?.name,
            email: data?.email,
            role: data?.role,
            image: data?.profileImageURL,
            bio: data?.bio,
          });
        }
      } catch (error) {
        console.error("Error fetching profile details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileDetails();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-white">
        <FiLoader className="animate-spin text-cyan-400" size={48} />
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="text-center text-gray-400">
        Could not load profile information.
      </div>
    );
  }

  const formattedJoinDate = userData.creationTime
    ? new Date(userData.creationTime).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "Not available";

  return (
    <div className="text-white">
      {/* Profile Header */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={
            userData.coverPhoto ||
            "https://placehold.co/1200x400/1A202C/FFFFFF?text=Cover+Photo"
          }
          alt="Cover"
          className="w-full h-48 md:h-64 object-cover bg-gray-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={userData.profileImageURL || avtar}
              alt="User Avatar"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-800 shadow-md -mt-16 md:-mt-20 bg-gray-700"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">
                {userData.name}
              </h1>
              <p className="text-lg text-gray-300 capitalize">
                {userData.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Info and Stats */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Profile Details</h2>
            <button
              onClick={() => navigate("/dashboard/edit-profile")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              <FiEdit />
              <span>Edit Profile</span>
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FiUser className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="text-lg">{userData.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Email Address</p>
                <p className="text-lg">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiBriefcase className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-lg capitalize">{userData.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiCalendar className="text-cyan-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Joined On</p>
                <p className="text-lg">{formattedJoinDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Activity Stats</h2>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
              >
                <p className="text-gray-300">{stat.label}</p>
                <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
