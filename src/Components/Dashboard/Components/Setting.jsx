import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiBell, FiTrash2 } from "react-icons/fi";

const ToggleSwitch = ({ label, description }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-gray-200">{label}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
          isEnabled ? "bg-blue-600" : "bg-gray-600"
        }`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isEnabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

function Setting() {
  return (
    <div className="space-y-8 text-white">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-gray-400">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Account Settings Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FiUser />
          Account Information
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Naruto Uzumaki"
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue="naruto@konoha.com"
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer "
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Security Settings Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FiLock />
          Change Password
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Notification Settings Card */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FiBell />
          Notifications
        </h2>
        <div className="space-y-4">
          <ToggleSwitch
            label="Email Notifications"
            description="Receive emails about your account activity."
          />
          <ToggleSwitch
            label="Push Notifications"
            description="Get push notifications on your devices."
          />
          <ToggleSwitch
            label="Monthly Newsletter"
            description="Subscribe to our awesome newsletter."
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-red-500/50">
        <h2 className="text-xl font-semibold text-red-400 mb-2 flex items-center gap-2">
          <FiTrash2 />
          Danger Zone
        </h2>
        <p className="text-gray-400 mb-4">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer">
          Delete My Account
        </button>
      </div>
    </div>
  );
}

export default Setting;
