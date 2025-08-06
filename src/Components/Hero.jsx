import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unite Your Team.{" "}
            <span className="text-cyan-400">Sync Your Skills.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The ultimate real-time collaboration platform designed to streamline
            your workflow and amplify your team's potential.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Get Started for Free
            </Link>
            <Link
              to="/app-demo"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center gap-2"
            >
              <FaPlayCircle />
              Watch Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
