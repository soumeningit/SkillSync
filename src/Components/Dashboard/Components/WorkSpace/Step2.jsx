import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

function Step2({ data, setData }) {
  const [inviteEmail, setInviteEmail] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleAddInvite = () => {
    console.log(inviteEmail);
    if (inviteEmail && !data.invites.includes(inviteEmail)) {
      setData({ ...data, invites: [...data.invites, inviteEmail] });
      setInviteEmail("");
    }
  };

  const handleRemoveInvite = (emailToRemove) => {
    setData({
      ...data,
      invites: data.invites.filter((email) => email !== emailToRemove),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Invite Team Members</h2>
      <p className="text-gray-400 mb-6">
        Add people to your workspace.{" "}
        <span className="font-semibold text-cyan-200">
          At the moment you can only invite 2 people
        </span>
        , you can always do this later.
      </p>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="flex gap-2">
        <input
          type="email"
          value={inviteEmail}
          onClick={(e) => {
            if (data.invites.length >= 2) {
              setError("You can only invite 2 people at the moment.");
              setDisabled(true);
              e.preventDefault();
              return;
            }
          }}
          onChange={(e) => setInviteEmail(e.target.value)}
          required
          placeholder="teammate@example.com"
          disabled={disabled}
          className="flex-1 bg-gray-700 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleAddInvite}
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
        >
          <FiPlus size={20} />
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {data.invites.map((email) => (
          <div
            key={email}
            className="flex items-center justify-between bg-gray-700 p-2 rounded-md"
          >
            <span className="text-gray-300">{email}</span>
            <button
              onClick={() => handleRemoveInvite(email)}
              className="text-gray-500 hover:text-red-400 cursor-pointer"
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step2;
