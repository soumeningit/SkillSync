import React from "react";
import { FaRocket } from "react-icons/fa";

function CTA() {
  return (
    <>
      <section id="cta" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-4 bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-xl shadow-2xl">
          <FaRocket className="text-5xl text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Elevate Your Teamwork?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of teams who are building their best work with
            SkillSync. Sign up now and get started in minutes.
          </p>
          <div className="mt-8">
            <a
              href="/register"
              className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              Sign Up for Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
