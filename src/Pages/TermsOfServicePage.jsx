import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      'By accessing or using the SkillSync platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.',
  },
  {
    id: "accounts",
    title: "2. User Accounts",
    content:
      "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
  },
  {
    id: "user-content",
    title: "3. User Content",
    content:
      'Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness. By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.',
  },
  {
    id: "prohibited-use",
    title: "4. Prohibited Use",
    content:
      "You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service in any way that violates any applicable national or international law or regulation; to exploit, harm, or attempt to exploit or harm minors in any way; or to engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.",
  },
  {
    id: "termination",
    title: "5. Termination",
    content:
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.",
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    content:
      "In no event shall SkillSync, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.",
  },
  {
    id: "governing-law",
    title: "7. Governing Law",
    content:
      "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.",
  },
  {
    id: "changes-to-terms",
    title: "8. Changes to Terms",
    content:
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
  },
  {
    id: "contact-us",
    title: "9. Contact Us",
    content:
      "If you have any questions about these Terms, please contact us at: legal@skillsync.com.",
  },
];

function TermsOfServicePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Please read these terms carefully before using our service.
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
                {termsSections.map((section) => (
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
            {termsSections.map((section) => (
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

export default TermsOfServicePage;
