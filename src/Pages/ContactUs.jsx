import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

// Reusable Header for internal pages
const PageHeader = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm p-4 sticky top-0 z-50 border-b border-gray-700">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-bold text-white">SkillSync</span>
        </div>
      </Link>
      <Link to="/" className="font-medium text-cyan-400 hover:text-cyan-300">
        Back to App
      </Link>
    </div>
  </header>
);

// Main ContactUsPage Component
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend service or email API
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <PageHeader />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Have a question, a suggestion, or need support? We'd love to hear
            from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <span className="text-gray-300">support@skillsync.com</span>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1" />
                <span className="text-gray-300">
                  123 Innovation Drive, Tech City, 54321
                </span>
              </div>
            </div>
            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <FaCheckCircle className="text-green-500 text-5xl mb-4" />
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300 mt-2">
                  Your message has been sent successfully. We'll be in touch
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
