import React, { useState, useEffect, useRef, useContext } from "react";
import { FaPaperPlane } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import Logo from "../Components/Logo";
import { registerUserAPI } from "../Service/Operation/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OtpPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const { authData } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log("authData : " + JSON.stringify(authData));

  // Timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    // if (isNaN(element.value)) return false; // Only allow numbers

    // Update OTP array
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Focus previous input on backspace
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);

    const data = {
      ...authData,
      name: authData.fullName,
      otp: enteredOtp,
    };

    console.log("Data to verify OTP:", data);

    const toastId = toast.loading("Verifying OTP...");

    try {
      const response = await registerUserAPI(data);
      console.log("OTP verification response:", response);
      toast.dismiss(toastId);
      if (response.status === 201) {
        toast.success("Account verified successfully!");
        navigate("/login");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Error verifying OTP. Please try again.");
      console.log("Error verifying OTP:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    setTimer(60); // Reset timer
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-white">Email Verification</h1>
          <p className="text-gray-400 mt-2">
            Please enter the 6-digit code sent to your email address.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 md:gap-4 mb-6">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    name="otp"
                    maxLength="1"
                    className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 cursor-pointer"
            >
              <FaPaperPlane />
              Verify Account
            </button>
          </form>
        </div>

        <div className="text-center text-gray-400 mt-8">
          {timer > 0 ? (
            <p>
              Didn't receive the code? Resend in{" "}
              <span className="font-bold text-cyan-400">{timer}s</span>
            </p>
          ) : (
            <p>
              Didn't receive the code?{" "}
              <button
                onClick={handleResend}
                className="font-medium text-cyan-400 hover:text-cyan-300 underline"
              >
                Resend OTP
              </button>
            </p>
          )}
          <p className="mt-2">
            <a
              href="/signup"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              &larr; Back to Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
