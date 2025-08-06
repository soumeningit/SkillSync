import React, { useContext, useState } from "react";
import {
  FiUsers,
  FiClipboard,
  FiCheckCircle,
  FiArrowLeft,
  FiDollarSign,
} from "react-icons/fi";
import Step1 from "./WorkSpace/Step1";
import Step2 from "./WorkSpace/Step2";
import Step3 from "./WorkSpace/Step3";
import Step4 from "./WorkSpace/Step4";
import toast from "react-hot-toast";
import { createWorkSpaceAPI } from "../../../Service/Operation/WorkSpaceService";
import AuthContext from "../../../Context/AuthContext";
import TeamContext from "../../../Context/TeamContext";
import { useNavigate } from "react-router-dom";

function CreateWorkspace() {
  const [step, setStep] = useState(1);
  const [workspaceData, setWorkspaceData] = useState({
    email: "",
    workSpaceName: "",
    address: "",
    idNumber: "",
    workSpaceDesc: "",
    invites: [],
    pricePlan: "Free",
  });

  const context = useContext(AuthContext);
  const teamContext = useContext(TeamContext);
  const navigate = useNavigate();

  const { token, user } = context;
  const { setTeamData } = teamContext;

  const steps = [
    { number: 1, icon: <FiClipboard />, name: "Details" },
    { number: 2, icon: <FiUsers />, name: "Invites" },
    { number: 3, icon: <FiDollarSign />, name: "Plan" },
    { number: 4, icon: <FiCheckCircle />, name: "Confirm" },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  async function handleSubmit() {
    const toastId = toast.loading("Creating workspace...");
    console.log("Submitting workspace data:", workspaceData);
    try {
      const response = await createWorkSpaceAPI(workspaceData, token);
      console.log("Workspace creation response:", response);
      console.log("Workspace creation response:", JSON.stringify(response));
      if (response.status === 201) {
        toast.success("Workspace created successfully!");
        const data = response?.data?.data;
        setTeamData(data);
        navigate(`/chat-page/${data?.teamId}/chat/${user}`);
      }
    } catch (error) {
      console.error("Error creating workspace:", error);
      toast.error("Failed to create workspace");
    } finally {
      toast.dismiss(toastId);
    }
  }

  // --- VALIDATION LOGIC ---
  // This variable checks if any of the required fields in Step 1 are empty.
  const isStep1Invalid =
    !workspaceData.email ||
    !workspaceData.workSpaceName ||
    !workspaceData.address ||
    !workspaceData.idNumber ||
    !workspaceData.workSpaceDesc;

  return (
    <div className="text-white">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Create a New Workspace</h1>
        <p className="mt-1 text-gray-400">
          Organize your projects and collaborate with your team.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ol className="flex items-center w-full">
            {steps.map((s, index) => (
              <li
                key={s.number}
                className={`flex w-full items-center ${
                  index !== steps.length - 1
                    ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
                    : ""
                } ${
                  step > s.number
                    ? "after:border-blue-500"
                    : "after:border-gray-700"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 transition-colors ${
                    step >= s.number ? "bg-blue-600" : "bg-gray-700"
                  }`}
                >
                  {s.icon}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Form Content */}
        <div className="min-h-[350px]">
          {step === 1 && (
            <Step1 data={workspaceData} setData={setWorkspaceData} />
          )}
          {step === 2 && (
            <Step2 data={workspaceData} setData={setWorkspaceData} />
          )}
          {step === 3 && (
            <Step3 data={workspaceData} setData={setWorkspaceData} />
          )}
          {step === 4 && <Step4 data={workspaceData} />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              <FiArrowLeft />
              Back
            </button>
          ) : (
            <div /> // Placeholder to keep "Next" button on the right
          )}

          {step < 4 ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && isStep1Invalid) || // Updated validation for Step 1
                (step === 3 && !workspaceData.pricePlan)
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Create Workspace
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
