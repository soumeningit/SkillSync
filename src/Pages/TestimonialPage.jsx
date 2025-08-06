import React from "react";
import { FaPlayCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Innovate Inc.",
    avatar: "https://picsum.photos/seed/sarah/200",
    quote:
      "SkillSync has completely transformed how our team collaborates. The task management and chat integration are seamless. Our productivity has skyrocketed, and we're delivering projects faster than ever before.",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Developer",
    company: "Tech Solutions",
    avatar: "https://picsum.photos/seed/mike/200",
    quote:
      "The SkillSync™ engine is a game-changer. We can now build project teams based on actual expertise, which has drastically improved our code quality and project outcomes. It's an essential tool for any development team.",
  },
  {
    name: "Emily Chen",
    role: "Head of Design",
    company: "Creative Minds",
    avatar: "https://picsum.photos/seed/emily/200",
    quote:
      "As a design team, visual collaboration is key. SkillSync's file sharing and commenting features make our feedback process incredibly efficient. It's clean, intuitive, and beautiful to use.",
  },
  {
    name: "David Lee",
    role: "CEO",
    company: "Growth Co.",
    avatar: "https://picsum.photos/seed/david/200",
    quote:
      "The analytics dashboard gives me a clear, real-time overview of team productivity and project progress. It's invaluable for making informed business decisions.",
  },
];

// Company Logos
const companies = [
  {
    name: "Innovate Inc.",
    logo: "https://placehold.co/150x50/1f2937/a0aec0?text=Innovate+Inc.",
  },
  {
    name: "Tech Solutions",
    logo: "https://placehold.co/150x50/1f2937/a0aec0?text=Tech+Solutions",
  },
  {
    name: "Creative Minds",
    logo: "https://placehold.co/150x50/1f2937/a0aec0?text=Creative+Minds",
  },
  {
    name: "Growth Co.",
    logo: "https://placehold.co/150x50/1f2937/a0aec0?text=Growth+Co.",
  },
  {
    name: "Quantum Leap",
    logo: "https://placehold.co/150x50/1f2937/a0aec0?text=Quantum+Leap",
  },
];

function TestimonialsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center text-yellow-400 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Loved by Teams Worldwide
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            See how high-performing teams from startups to enterprise companies
            use SkillSync to build their best work.
          </p>
        </section>

        {/* Featured Video Testimonial */}
        <section className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Team collaborating"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
              <button className="text-white group">
                <FaPlayCircle className="text-7xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-xl font-semibold text-white">
              "SkillSync cut our project planning time in half."
            </p>
            <p className="text-gray-400 mt-1">
              - Maria Garcia, COO at Quantum Leap
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl flex flex-col"
              >
                <FaQuoteLeft className="text-3xl text-cyan-400 mb-4" />
                <p className="text-gray-300 italic flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="mt-24">
          <h2 className="text-center text-2xl font-bold text-white mb-10">
            Trusted by the World's Most Innovative Companies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {companies.map((company) => (
              <img
                key={company.name}
                src={company.logo}
                alt={company.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-blue-100 mt-3 mb-6">
            Join thousands of teams transforming their collaboration with
            SkillSync.
          </p>
          <a
            href="/signup"
            className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            Start Your Free Trial
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TestimonialsPage;
