import {
  FaBug,
  FaClipboardCheck,
  FaLock,
  FaNetworkWired,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const SecurityFeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <div className="flex items-center gap-4 mb-3">
      <div className="text-cyan-400 text-2xl">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// Main SecurityPage Component
function SecurityPage() {
  const features = [
    {
      icon: <FaLock />,
      title: "Encryption At Rest & In Transit",
      description:
        "All your data, including messages, files, and user information, is encrypted using AES-256 standard. Data is also encrypted in transit between you and our servers using TLS 1.2+ to protect against eavesdropping.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Network & Infrastructure Security",
      description:
        "Our platform is hosted on secure, top-tier cloud infrastructure that provides robust protection against network-level threats like DDoS attacks. We employ firewalls and regular network monitoring to ensure infrastructure integrity.",
    },
    {
      icon: <FaUserShield />,
      title: "Secure Access Control",
      description:
        "We enforce strong password policies and offer Two-Factor Authentication (2FA) for all users. Our permission system ensures that users can only access the data and projects they have been explicitly granted access to.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Compliance & Auditing",
      description:
        "SkillSync is designed to meet industry standards like SOC 2 and GDPR. We conduct regular internal and third-party security audits to ensure our practices and controls are effective and up-to-date.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto">
          <FaShieldAlt className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Your Security is Our Top Priority
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            We are committed to protecting your team's data with
            enterprise-grade security, comprehensive compliance, and a culture
            of trust and transparency.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <SecurityFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Data Privacy Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white">
            We Protect Your Privacy
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            We believe your data is yours, not ours. We do not sell your data to
            third parties, and we have strict internal policies to prevent
            unauthorized access. Our Privacy Policy provides a transparent look
            at how we handle your information.
          </p>
          <Link
            to="/privacy"
            className="mt-6 inline-block text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Read Our Privacy Policy &rarr;
          </Link>
        </section>

        {/* Responsible Disclosure Section */}
        <section className="mt-20 bg-gray-800 p-10 rounded-2xl max-w-4xl mx-auto text-center">
          <FaBug className="text-4xl text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">
            Responsible Disclosure
          </h2>
          <p className="text-gray-400 mt-3 mb-6">
            Found a security vulnerability? We encourage responsible disclosure.
            Please report any potential issues to our security team, and we will
            investigate promptly.
          </p>
          <a
            href="mailto:security@skillsync.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Report a Vulnerability
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default SecurityPage;
