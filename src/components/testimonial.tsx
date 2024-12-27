import React from "react";
import testimonialsData from "@/data/testimonials.json";

const Testimonial: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-auto bg-gray-100">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={testimonialsData.videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 bg-white bg-opacity-90 py-16 px-8 sm:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 shadow-lg rounded-lg bg-gray-50">
              <img
                src={testimonial.imageSrc || "/placeholder-image.png"} // Fallback for missing image
                alt={testimonial.imageAlt}
                className="w-full h-40 object-contain mb-4"
              />
              <h1 className="text-2xl font-bold mb-4">{testimonial.heading}</h1>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;