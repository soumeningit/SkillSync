import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { forgotPasswordAPI } from "../Service/Operation/AuthService";
import Logo from "../Components/Logo";
import toast from "react-hot-toast";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending reset link...");
    try {
      const data = {
        email,
      };
      const response = await forgotPasswordAPI(data);
      console.log("response : " + response);
      console.log("response : " + JSON.stringify(response));
      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("Reset link sent successfully!");
        setSubmitted(true);
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
          <h1 className="text-3xl font-bold text-white">
            Forgot Your Password?
          </h1>
          <p className="text-gray-400 mt-2">
            No problem. Enter your email below and we'll send you a reset link.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white">
                Check Your Email
              </h2>
              <p className="text-gray-300 mt-3">
                If an account with{" "}
                <span className="font-bold text-cyan-400">{email}</span> exists,
                you will receive an email with instructions on how to reset your
                password.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Registered Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 cursor-pointer"
              >
                <FaPaperPlane />
                Send Reset Link
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-gray-400 mt-8">
          <a
            href="/login"
            className="font-medium text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2"
          >
            &larr; Back to Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
