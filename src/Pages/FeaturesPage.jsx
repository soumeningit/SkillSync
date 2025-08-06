import React from "react";
import {
  FaComments,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaChartLine,
  FaUsersCog,
  FaRocket,
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FeatureSection from "../Components/FeatureSection";
import { Link } from "react-router-dom";
import fig1 from "../assets/F_img1.webp";
import fig2 from "../assets/F_img2.avif";
import fig3 from "../assets/F_img3.jpg";
import fig4 from "../assets/F_img4.jpg";

function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <FaComments />,
      title: "Seamless Real-Time Communication",
      description:
        "Keep your team connected with dedicated channels, threaded conversations, and powerful direct messaging. Share files, react with emojis, and mention teammates to ensure everyone stays in the loop without getting lost in email chains.",
      image: fig1,
      imageAlt: "Illustration of a chat interface",
    },
    {
      icon: <FaListCheck />,
      title: "Advanced Task Management",
      description:
        "Move projects forward with our intuitive Kanban-style task boards. Create, assign, and prioritize tasks with custom statuses and deadlines. Get a clear view of your team's workload and identify bottlenecks before they become problems.",
      image: fig2,
      imageAlt: "Illustration of a task board",
      reverse: true,
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "The Revolutionary SkillSync™ Engine",
      description:
        "Our unique SkillSync™ engine allows you to map and visualize your team's capabilities. When a new task arises, instantly see who has the right skills for the job, ensuring optimal resource allocation and fostering mentorship opportunities.",
      image: fig3,
      imageAlt: "Abstract illustration of connected skill nodes",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="px-4">
        {/* Page Header */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Powerful Features, Built for Collaboration
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the tools that make SkillSync the last collaboration
            platform you'll ever need.
          </p>
        </section>

        {/* Main Feature Sections */}
        {mainFeatures.map((feature) => (
          <FeatureSection key={feature.title} {...feature} />
        ))}

        {/* Secondary Features/Benefits */}
        <section className="py-24 bg-gray-800 rounded-2xl my-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">
              And So Much More...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-5xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-400 mt-2">
                  End-to-end encryption and compliance standards to keep your
                  data safe.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaChartLine className="text-5xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  Insightful Analytics
                </h3>
                <p className="text-gray-400 mt-2">
                  Track project progress and team productivity with our powerful
                  reporting dashboard.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaUsersCog className="text-5xl text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  Custom Integrations
                </h3>
                <p className="text-gray-400 mt-2">
                  Connect with the tools you already use, like GitHub, Figma,
                  and Google Drive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-24">
          <FaRocket className="text-5xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">
            Ready to See It for Yourself?
          </h2>
          <p className="text-gray-400 mt-3 mb-6 max-w-2xl mx-auto">
            Explore all these features and more. Sign up for free and discover a
            new level of team productivity.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Get Started
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FeaturesPage;
