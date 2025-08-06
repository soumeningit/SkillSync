import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import Logo from "../Components/Logo";
import FormLabel from "../Components/FormLabel";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordAPI } from "../Service/Operation/AuthService";

function UpdatePasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState();

  const location = useLocation();

  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromURL = params.get("token");
    if (tokenFromURL) {
      setToken(tokenFromURL);
    }
  }, [location.search]);

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const toastId = toast.loading("Updating password...");
    try {
      const data = {
        resetToken: token,
        userId,
        password: formData.confirmPassword,
      };

      console.log("data : " + JSON.stringify(data));

      const response = await resetPasswordAPI(data);
      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("Password Change Successfully");
        setSuccess(true);
        navigate("/login");
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  };
  console.log("Updating password for:", formData.email);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Update Your Password
          </h1>
          <p className="text-gray-400 mt-2">
            Please choose a new, secure password for your account.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          {success ? (
            <div className="text-center">
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white">
                Password Updated!
              </h2>
              <p className="text-gray-300 mt-3">
                Your password has been updated successfully. You can now log in
                with your new password.
              </p>
              <a
                href="/login"
                className="mt-6 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Proceed to Log In
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="relative">
                <FormLabel htmlFor="password">New Password</FormLabel>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <FaEyeSlash className="cursor-pointer translate-y-1.5" />
                  ) : (
                    <FaEye className="cursor-pointer translate-y-1.5" />
                  )}
                </button>
              </div>

              <div className="relative">
                <FormLabel htmlFor="confirmPassword">
                  Confirm New Password
                </FormLabel>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-10 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="cursor-pointer translate-y-1.5" />
                  ) : (
                    <FaEye className="cursor-pointer translate-y-1.5" />
                  )}
                </button>
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 cursor-pointer"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdatePasswordPage;
