import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const policySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content:
      'This Privacy Policy explains how SkillSync ("we," "us," or "our") collects, uses, and discloses information about you when you access or use our websites, mobile applications, and other online products and services (collectively, the "Services").',
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, password, and any other information you choose to provide. We also collect information automatically when you use the Services, including log data, device information, and usage data.",
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our Services; process transactions; send you technical notices and support messages; communicate with you about products, services, and events; monitor and analyze trends and usage; and personalize the Services.",
  },
  {
    id: "information-sharing",
    title: "4. Sharing of Information",
    content:
      "We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors and service providers who need access to such information to carry out work on our behalf; in response to a legal request if we believe disclosure is required by law; or with your consent.",
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content:
      "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. This includes using encryption for data in transit and at rest.",
  },
  {
    id: "your-choices",
    title: "6. Your Choices",
    content:
      "You may update, correct, or delete information about you at any time by logging into your account. If you wish to delete your account, please contact us at support@skillsync.com, but note that we may retain certain information as required by law or for legitimate business purposes.",
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    content:
      "Our Services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.",
  },
  {
    id: "changes-to-policy",
    title: "8. Changes to This Policy",
    content:
      "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).",
  },
  {
    id: "contact-us",
    title: "9. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at: privacy@skillsync.com.",
  },
];

function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Your privacy is important to us. This policy explains what
            information we collect and how we use it.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: July 29, 2025
          </p>
        </section>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Side: Navigation */}
          <aside className="md:col-span-1">
            <div className="sticky top-28">
              <h3 className="font-bold text-white text-lg mb-4">
                On this page
              </h3>
              <ul className="space-y-3">
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Side: Policy Content */}
          <main className="md:col-span-3 space-y-12">
            {policySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                  {section.title}
                </h2>
                <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed">
                  <p>{section.content}</p>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
