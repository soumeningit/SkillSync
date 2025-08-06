import React from "react";
import { FaBullseye, FaUsers, FaRegLightbulb } from "react-icons/fa";
import Header from "../Components/Header";
import TeamMemberCard from "../Components/TeamMemberCard";
import figure from "../assets/About_Fig1.jpg";
import figure1 from "../assets/naruto.png";
import figure2 from "../assets/jiraiya.png";
import figure3 from "../assets/kakasi.png";

function AboutUs() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      avatar: figure2,
      bio: "A visionary leader passionate about building tools that empower teams to do their best work.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Maria Garcia",
      role: "Lead Developer",
      avatar: figure1,
      bio: "The architectural mastermind behind SkillSync's robust and scalable platform.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Sam Chen",
      role: "Head of Product & Design",
      avatar: figure3,
      bio: "Dedicated to creating intuitive and beautiful user experiences that solve real-world problems.",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* --- Our Mission Section --- */}
        <section className="text-center max-w-4xl mx-auto">
          <FaBullseye className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Mission
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            To revolutionize team collaboration by creating a single, intuitive
            platform where skills are visible, communication is seamless, and
            productivity is unlocked. We believe that the right tools can
            transform a group of individuals into a high-performing,
            synchronized team.
          </p>
        </section>

        {/* --- Our Story Section --- */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              From a Simple Idea to a Global Platform
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              SkillSync was born from a common frustration: talented teams
              struggling with disconnected tools and a lack of clarity on who
              does what best. As developers, designers, and project managers, we
              experienced this firsthand.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In 2023, we set out to build the solution we wished we had—a
              platform that not only connects people through chat but also
              connects their skills to the work that needs to be done. Today,
              SkillSync is helping thousands of teams worldwide build better,
              faster, and more cohesively.
            </p>
          </div>
          <div className="order-1 md:order-2 text-center">
            <FaRegLightbulb className="text-9xl text-blue-500 mx-auto opacity-20" />
            <img
              src={figure}
              alt="Team collaborating"
              className="rounded-2xl shadow-2xl -mt-24"
            />
          </div>
        </section>

        {/* --- Meet the Team Section --- */}
        <section className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <FaUsers className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-white">
              Meet the Innovators
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We are a passionate group of creators, thinkers, and
              problem-solvers dedicated to improving the way teams work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/* --- Join Us CTA --- */}
        <section className="mt-24 text-center bg-gray-800 p-12 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Want to Join Our Mission?
          </h2>
          <p className="text-gray-400 mt-3 mb-6">
            We're always looking for talented individuals who are passionate
            about the future of work. Check out our open positions.
          </p>
          <a
            href="/careers"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Careers
          </a>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
