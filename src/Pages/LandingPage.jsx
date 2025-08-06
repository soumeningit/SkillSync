import React from "react";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
export default LandingPage;
