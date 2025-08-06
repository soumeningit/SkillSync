import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../Components/Logo";
import GoogleIcon from "../Components/GoogleIcon";
import FormLabel from "../Components/FormLabel";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { sendOTPAPI } from "../Service/Operation/AuthService";
import toast from "react-hot-toast";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const { setAuthData } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    console.log("Redirecting to Google Sign Up...");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const toastId = toast.loading("Sending OTP...");

    try {
      const data = {
        name: formData.fullName,
        email: formData.email,
      };

      const response = await sendOTPAPI(data);

      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("OTP sent successfully!");
        setError("");
        setAuthData((prev) => ({
          ...prev,
          ...formData,
        }));
        navigate("/verify-otp");
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
          <p className="text-gray-400 mt-2">
            Join SkillSync to supercharge your team's collaboration.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex justify-center items-center gap-3 bg-white text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <GoogleIcon />
            Sign Up with Google
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Naruto Uzumaki"
              />
            </div>

            <div>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <FormLabel htmlFor="role">Your Role</FormLabel>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="user">User</option>
                <option value="developer">Developer</option>
                <option value="manager">Project Manager</option>
                <option value="designer">Designer</option>
                <option value="tester">QA Tester</option>
              </select>
            </div>

            <div className="relative">
              <FormLabel htmlFor="password">Password</FormLabel>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <FaEyeSlash className="translate-y-1.5 cursor-pointer" />
                ) : (
                  <FaEye className="translate-y-1.5 cursor-pointer" />
                )}
              </button>
            </div>

            <div className="relative">
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-10 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="translate-y-1.5 cursor-pointer" />
                ) : (
                  <FaEye className="translate-y-1.5 cursor-pointer" />
                )}
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 !mt-6 cursor-pointer"
            >
              Create Account
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
