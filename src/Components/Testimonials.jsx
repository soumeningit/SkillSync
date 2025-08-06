import React from "react";

function Testimonials() {
  const testimonialList = [
    {
      name: "Sarah J.",
      role: "Project Manager, Innovate Inc.",
      quote:
        "SkillSync has revolutionized how our team collaborates. The task management and chat integration are seamless. Our productivity has skyrocketed!",
      avatar: "https://picsum.photos/seed/sarah/100",
    },
    {
      name: "Mike R.",
      role: "Lead Developer, Tech Solutions",
      quote:
        "The 'Skill Syncing' feature is a game-changer. We can now build project teams based on actual expertise, which has drastically improved our project outcomes.",
      avatar: "https://picsum.photos/seed/mike/100",
    },
  ];
  return (
    <>
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Loved by Teams Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialList.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
