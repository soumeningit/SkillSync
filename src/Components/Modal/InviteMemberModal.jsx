import React, { useState } from "react";
import {
  FiX,
  FiMail,
  FiUser,
  FiSend,
  FiCheckCircle,
  FiCopy,
} from "react-icons/fi";
import toast from "react-hot-toast";

/**
 * A modal for inviting new members to the team via email,
 * which then provides a shareable link.
 */
function InviteMemberModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [invitationLink, setInvitationLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      // In a real app, this is where you would make an API call
      // to your backend to create an invitation record.
      console.log("Creating invitation for:", { name, email });

      // The backend would return a unique token or ID for the link.
      const generatedLink = `https://yourapp.com/invite/join/team/Shinobi-Alliance/t-id/${Date.now()}`;
      setInvitationLink(generatedLink);
      setIsSubmitted(true);
      toast.success("Invitation link generated!");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    toast.success("Invitation link copied to clipboard!");
  };

  const handleClose = () => {
    // Reset state for next time the modal is opened
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setInvitationLink("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">
            {isSubmitted ? "Invitation Link" : "Invite New Member"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        {!isSubmitted ? (
          // --- Form View ---
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Rock Lee"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rock.lee@example.com"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-700 gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
              >
                <FiSend />
                Generate Link
              </button>
            </div>
          </form>
        ) : (
          // --- Success View ---
          <div>
            <div className="p-6 text-center">
              <FiCheckCircle className="mx-auto text-green-400 h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold">Link Generated!</h3>
              <p className="text-gray-400 mt-2">
                Share this link with the new member to have them join your team.
              </p>
              <div className="mt-4 flex items-center bg-gray-900 rounded-lg p-2">
                <input
                  type="text"
                  readOnly
                  value={invitationLink}
                  className="bg-transparent w-full text-gray-300 focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md transition-colors cursor-pointer"
                >
                  <FiCopy />
                </button>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-700">
              <button
                onClick={handleClose}
                className="bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InviteMemberModal;
