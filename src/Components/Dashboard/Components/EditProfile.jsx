import React, { useState } from "react";
import { FiUser, FiMapPin, FiSettings, FiCamera } from "react-icons/fi";
import avtar from "../../../assets/naruto_avtar.png"; // Adjust the path as needed
import InputField from "./InputField";
import TabButton from "./TabButton";
import PersonalInfoTab from "./PersonalInfoTab";
import AddressTab from "./AddressTAb";
import AccountSettingsTab from "./AccountSettingsTab";

function EditProfile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [profileData, setProfileData] = useState({
    // From 'users' table
    name: "Naruto Uzumaki",
    email: "naruto@konoha.com",
    contact_no: "+91-9876543210",
    avatar: avtar,
    // From 'user_profiles' table
    coverPhoto: "https://placehold.co/1200x400/1A202C/FFFFFF?text=Cover+Photo",
    address: "Hokage Residence, Konohagakure",
    city: "Village Hidden in the Leaves",
    state: "Land of Fire",
    pin_code: "123456",
    country: "Shinobi World",
    gender: "male",
    bio: "I'm gonna be the greatest Hokage! Believe it!",
    dob: "2007-10-10",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Profile Data:", profileData);
    alert("Profile saved successfully! Check console for data.");
  };

  return (
    <div className="text-white">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Edit Profile</h1>
        <p className="mt-1 text-gray-400">
          Update your personal, address, and account details.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg">
          {/* Tab Navigation */}
          <div className="border-b border-gray-700 px-6">
            <nav className="-mb-px flex space-x-6">
              <TabButton
                active={activeTab === "personal"}
                onClick={() => setActiveTab("personal")}
              >
                <FiUser className="inline-block mr-2" /> Personal Info
              </TabButton>
              <TabButton
                active={activeTab === "address"}
                onClick={() => setActiveTab("address")}
              >
                <FiMapPin className="inline-block mr-2" /> Address
              </TabButton>
              <TabButton
                active={activeTab === "account"}
                onClick={() => setActiveTab("account")}
              >
                <FiSettings className="inline-block mr-2" /> Account
              </TabButton>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "personal" && (
              <PersonalInfoTab data={profileData} setData={setProfileData} />
            )}
            {activeTab === "address" && (
              <AddressTab data={profileData} setData={setProfileData} />
            )}
            {activeTab === "account" && (
              <AccountSettingsTab data={profileData} setData={setProfileData} />
            )}
          </div>

          {/* Form Footer */}
          <div className="flex justify-end p-6 border-t border-gray-700">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Save All Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
