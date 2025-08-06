import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../Components/Logo";
import GoogleIcon from "../Components/GoogleIcon";
import FormLabel from "../Components/FormLabel";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../Service/Operation/AuthService";
import toast from "react-hot-toast";
import AuthContext from "../Context/AuthContext";

// Main LoginPage Component
function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const context = useContext(AuthContext);
  const { addToken, setAuthData } = context;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleGoogleLogin = () => {
    // In a real application, this would trigger the OAuth flow
    console.log("Redirecting to Google Log In...");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    try {
      const response = await loginUserAPI(formData);
      console.log("response : " + response);
      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("Login successful!");
        addToken(response?.data?.data?.token, response?.data?.data?.id);
        const userId = response?.data?.data?.id;
        navigate(`/dashboard/profile/${userId}`);
      }
      console.log("response from loginUserAPI:", response);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Error during login. Please try again.");
      console.log("Error during login:", error);
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
          <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
          <p className="text-gray-400 mt-2">
            Log in to your SkillSync account.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center gap-3 bg-white text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <GoogleIcon />
            Log In with Google
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Link
                  to="/forgot-password"
                  className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                  Forgot Password?
                </Link>
              </div>
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
                className="absolute right-3 top-10 text-gray-400 hover:text-white translate-y-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 cursor-pointer"
            >
              Log In
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-cyan-400 hover:text-cyan-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
