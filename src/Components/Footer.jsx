import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Logo />
                <span className="text-2xl font-bold text-white">SkillSync</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                The ultimate real-time collaboration platform designed to
                streamline your workflow.
              </p>
            </div>
            {/* Column 2: Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/features"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/app-demo"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3: Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 4: Legal Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm order-2 sm:order-1 mt-4 sm:mt-0">
              &copy; {new Date().getFullYear()} SkillSync. All rights reserved.
            </p>
            <div className="flex space-x-6 order-1 sm:order-2">
              <Link
                to="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <FaTwitter size={22} />
              </Link>
              <Link
                to="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin size={22} />
              </Link>
              <Link
                to="#"
                aria-label="GitHub"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <FaGithub size={22} />
              </Link>
              <Link
                to="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <FaInstagram size={22} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
