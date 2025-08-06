import React, { useState } from "react";
import {
  FaBriefcase,
  FaHeart,
  FaStar,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Backend Engineer (Java/Spring)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Designer (UX/UI)",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Barrackpore, India",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Frontend Engineer (React)",
    department: "Engineering",
    location: "Barrackpore, India",
    type: "Full-time",
  },
];

function CareersPage() {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === filter);

  const departments = [
    "All",
    ...new Set(jobOpenings.map((job) => job.department)),
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <FaUsers className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Join Our Mission
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            We're building the future of team collaboration, and we need
            passionate, creative people to help us achieve our vision. If you're
            excited about solving complex problems and making a real impact,
            you're in the right place.
          </p>
        </section>

        {/* Culture & Values Section */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-8 rounded-xl">
              <FaStar className="text-3xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">
                Innovate Fearlessly
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                We tackle big challenges and aren't afraid to try new things.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <FaBriefcase className="text-3xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">Own Your Impact</h3>
              <p className="text-gray-400 mt-2 text-sm">
                We trust our team members to take ownership and deliver
                excellence.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <FaHeart className="text-3xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">Succeed Together</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Collaboration is at our core. We support each other to achieve
                shared goals.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Current Openings</h2>
            <p className="text-gray-400 mt-2">
              Find your next opportunity and grow with us.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  filter === dept
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-700/70 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      {job.department} &middot; {job.location} &middot;{" "}
                      {job.type}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    Apply Now <FaArrowRight />
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-10">
                <p>
                  No openings for this department at the moment. Please check
                  back later!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Don't see your role? */}
        <section className="mt-24 text-center bg-gray-800 p-12 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-gray-400 mt-3 mb-6">
            We are always looking for talented people. If you believe you're a
            great fit for our mission, we'd still love to hear from you.
          </p>
          <a
            href="mailto:careers@skillsync.com"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CareersPage;
