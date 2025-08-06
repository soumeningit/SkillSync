import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import {
  FiCheck,
  FiX,
  FiMail,
  FiLogIn,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";
import Modal from "../Components/Modal/Modal";
import { LuUserPlus } from "react-icons/lu";
import { joinTeamAPI } from "../Service/Operation/WorkSpaceService";
import toast from "react-hot-toast";
import InvitationContext from "../Context/InvitationContext";
import AuthContext from "../Context/AuthContext";

function InvitationPage() {
  const { teamName, teamId, tokenId, invitationId, teamCreatorId } =
    useParams();
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  console.log("Team Name:", teamName);
  console.log("Team ID:", teamId);
  console.log("Token ID:", tokenId);
  console.log("Invitation ID:", invitationId);
  console.log("teamCreatorId : " + teamCreatorId);

  const location = useLocation();
  console.log("Location State:", JSON.stringify(location));

  const tokenParam = location.search.split("=")[1];
  console.log("Token from URL:", tokenParam);

  const [hasAccepted, setHasAccepted] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const invitationContext = useContext(InvitationContext);
  const { acceptInvitation } = invitationContext;

  const handleReject = () => {
    setHasAccepted("rejected");
    navigate("/");
    handleRejectInvitation();
  };

  const handleAccept = () => {
    setHasAccepted(true);
    setStatus("accepted");
  };

  const handleJoinSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Joining team...");
    try {
      const data = {
        teamId: teamId,
        token: tokenParam,
        tokenId: tokenId,
        email: email,
        invitationID: invitationId,
        inviteStatus: status,
      };
      const response = await joinTeamAPI(data);
      console.log("Join Team Response:", response);
      toast.dismiss(toastId);
      if (response.status === 201) {
        toast.success("Successfully joined the team!");
        acceptInvitation(data);
        navigate(`/chat-page/${teamId}/chat/${teamCreatorId}`);
      }
    } catch (error) {
      toast.dismiss(toastId);
      if (error.response.status === 404) {
        setShowRegisterModal(true);
        toast.error(
          "This email is not associated with an account. Please register."
        );
      }
      console.error("Error joining team:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleRejectInvitation = async () => {
    e.preventDefault();

    const toastId = toast.loading("Rejecting team...");
    try {
      const data = {
        teamId: teamId,
        token: token,
        tokenId: tokenId,
        email: email,
        invitationID: invitationId,
        inviteStatus: status,
      };
      const response = await joinTeamAPI(data, token);
      toast.dismiss(toastId);
      if (response.status === 201) {
        toast.success("Successfully rejected the invitation!");
        navigate("/");
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Error rejecting invitation:", error);
      toast.error("Failed to reject the invitation. Please try again later.");
    } finally {
      toast.dismiss(toastId);
      setEmail("");
      setHasAccepted(false);
      setShowRegisterModal(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-500">
            {!hasAccepted ? (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mb-6">
                  <FiUsers className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">Team Invitation</h2>
                <p className="mt-2 text-lg text-gray-400">
                  You have been invited to join the team:
                </p>
                <p className="mt-2 text-3xl font-bold text-cyan-400">
                  {teamName}
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={handleReject}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                  >
                    <FiX />
                    Reject
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                  >
                    <FiCheck />
                    Accept
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-center mb-1">
                  Welcome to {teamName}!
                </h2>
                <p className="text-center text-gray-400 mb-6">
                  Confirm your email to join the team.
                </p>
                <form onSubmit={handleJoinSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Your Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    <FiLogIn />
                    Join Team
                  </button>
                  <div className="flex flex-col items-center gap-4">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <FiArrowLeft /> Go Back to Home
                    </Link>
                    <span className="block text-sm text-gray-400 text-center">
                      By joining, you agree to our{" "}
                      <Link
                        to="/terms"
                        className="text-blue-500 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-500 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onClick={() => navigate("/register")}
        heading="Registration Required!"
        desc="This email is not associated with an account. Please register to join the team."
        btn1="Register"
        btn2="Cancel"
        icon={<LuUserPlus className="h-6 w-6 text-cyan-400" />}
      />
    </>
  );
}

export default InvitationPage;
