import React from "react";
import { FaHome } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const PageHeader = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm p-4 absolute top-0 w-full">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-bold text-white">SkillSync</span>
        </div>
      </Link>
    </div>
  </header>
);

// Error Illustration SVG
const ErrorIllustration = () => (
  <svg
    width="200"
    height="150"
    viewBox="0 0 400 300"
    className="mx-auto mb-8 text-gray-700"
  >
    <path
      d="M 50 200 L 150 100 L 250 200 L 350 100"
      stroke="currentColor"
      strokeWidth="15"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="100" cy="250" r="20" fill="currentColor" />
    <circle cx="300" cy="250" r="20" fill="currentColor" />
    <text
      x="200"
      y="180"
      fontFamily="monospace"
      fontSize="100"
      fill="#4A5568"
      textAnchor="middle"
    >
      ?
    </text>
  </svg>
);

// Main ErrorPage Component
// It can be customized with props for different error types
function Error({
  errorCode = "404",
  title = "Page Not Found",
  message = "Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or maybe you just mistyped the URL.",
}) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <PageHeader />
      <main className="text-center">
        <div className="mb-8">
          <p className="text-8xl md:text-9xl font-extrabold text-cyan-400 opacity-30">
            {errorCode}
          </p>
        </div>

        <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl max-w-2xl mx-auto -mt-16 relative">
          <ErrorIllustration />
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <p className="mt-4 text-gray-400">{message}</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <FaHome />
            Go Back Home
          </a>
        </div>
      </main>
    </div>
  );
}

export default Error;
