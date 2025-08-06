import React from "react";
import { FaChalkboardTeacher, FaComments, FaShieldAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

function Features() {
  const featureList = [
    {
      icon: <FaComments />,
      title: "Real-Time Chat",
      description:
        "Seamless communication with channels, threads, and direct messaging to keep everyone in the loop.",
    },
    {
      icon: <FaListCheck />,
      title: "Task Management",
      description:
        "Assign, track, and manage tasks with an intuitive board-style interface. Never miss a deadline.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Skill Syncing",
      description:
        "Identify and leverage team members' skills for optimal project allocation and team growth.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description:
        "Your data is protected with end-to-end encryption and enterprise-grade security protocols.",
    },
  ];
  return (
    <>
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything You Need in One Platform
            </h2>
            <p className="text-gray-400 mt-2">
              Focus on your work, not on juggling tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureList.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-900 p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform"
              >
                <div className="text-5xl text-cyan-400 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
