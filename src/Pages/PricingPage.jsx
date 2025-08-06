import React, { useState } from "react";
import { FaCheckCircle, FaRocket, FaQuestionCircle } from "react-icons/fa";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$0",
      user_count: "Up to 5 users",
      cta: "Get Started",
      features: [
        "Real-time chat",
        "3 Active Projects",
        "Basic Task Management",
        "Standard Support",
      ],
    },
    {
      name: "Pro",
      price: "$15",
      user_count: "Per user / month",
      cta: "Choose Plan",
      features: [
        "Everything in Starter",
        "Unlimited Projects",
        "Advanced Task Management",
        "Skill Syncing & Reporting",
        "Priority Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      user_count: "For large teams",
      cta: "Contact Sales",
      features: [
        "Everything in Pro",
        "Single Sign-On (SSO)",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
    },
  ],
  annually: [
    {
      name: "Starter",
      price: "$0",
      user_count: "Up to 5 users",
      cta: "Get Started",
      features: [
        "Real-time chat",
        "3 Active Projects",
        "Basic Task Management",
        "Standard Support",
      ],
    },
    {
      name: "Pro",
      price: "$12",
      user_count: "Per user / month",
      cta: "Choose Plan",
      features: [
        "Everything in Starter",
        "Unlimited Projects",
        "Advanced Task Management",
        "Skill Syncing & Reporting",
        "Priority Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      user_count: "For large teams",
      cta: "Contact Sales",
      features: [
        "Everything in Pro",
        "Single Sign-On (SSO)",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
    },
  ],
};

// FAQ Data
const faqs = [
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated.",
  },
  {
    question: "What counts as an 'active project'?",
    answer:
      "An active project is any project that is not archived. You can have unlimited archived projects on all plans.",
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer:
      "Yes, we offer a 14-day free trial on our Pro plan. No credit card is required to get started.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "The Starter plan includes email support. The Pro plan includes priority email and in-app chat support. The Enterprise plan includes a dedicated account manager and phone support.",
  },
];

// Main PricingPage Component
function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FaRocket className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Find the Perfect Plan for Your Team
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Start for free and scale as you grow. All plans include our core
            collaboration features.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center mt-10">
          <span className="font-medium">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer mx-4">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annually" : "monthly"
                )
              }
            />
            <div className="w-14 h-8 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="font-medium">Annually</span>
          <span className="ml-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Save 20%
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {plans[billingCycle].map((plan) => (
            <div
              key={plan.name}
              className={`bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col ${
                plan.highlighted
                  ? "border-2 border-cyan-400 transform scale-105"
                  : "border border-gray-700"
              }`}
            >
              {plan.highlighted && (
                <span className="bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full self-center absolute -top-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white text-center">
                {plan.name}
              </h3>
              <p className="text-center text-gray-400 mt-2">
                {plan.user_count}
              </p>
              <div className="text-center my-6">
                <span className="text-5xl font-extrabold text-white">
                  {plan.price}
                </span>
              </div>
              <a
                href="/signup"
                className={`w-full text-center font-bold py-3 px-4 rounded-lg transition-colors ${
                  plan.highlighted
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.cta}
              </a>
              <ul className="space-y-4 mt-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-gray-800 p-6 rounded-lg cursor-pointer"
              >
                <summary className="flex justify-between items-center font-semibold text-lg text-white">
                  {faq.question}
                  <FaQuestionCircle className="text-gray-500" />
                </summary>
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PricingPage;
