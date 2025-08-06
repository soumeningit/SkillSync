function FeatureSection({
  icon,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}) {
  return (
    <section className="py-16">
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:grid-flow-col-dense" : ""
        }`}
      >
        <div className={` ${reverse ? "md:col-start-2" : ""}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-800 p-3 rounded-lg text-cyan-400 text-2xl">
              {icon}
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
        <div className={` ${reverse ? "md:col-start-1" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="rounded-2xl shadow-2xl w-[25rem] h-[15rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
