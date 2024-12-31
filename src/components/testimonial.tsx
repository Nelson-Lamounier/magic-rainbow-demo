
"use client"
import  { FC } from "react";
import WithAnimation from "@/util/animation";

import {
  testimonialsData,
  Testimonial as TestimonialType,
} from "@/data/testimonials";
import Image from "next/legacy/image";

const Testimonial: FC = () => {
  const { videoSrc, testimonials } = testimonialsData;



  return (
    <section className="font-sans py-10 relative bg-gray-100 overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col items-center max-h-full overflow-y-auto">
        {testimonials.map((testimonial: TestimonialType) => (
          <div 
            key={testimonial.id}
            className="bg-gray-100/85 p-10 sm:p-20 m-4 sm:m-6 w-[80%] shadow-[0_2rem_5rem_rgba(51,51,51,0.4)] lg:skew-x-12 transform "
          >
            <div className="transform px-10 skew-x-[-12deg] below-md:skew-x-0 flex below-md:flex-col items-center">
                {/* Testimonial Image */}
              <div className="relative p-20 w-80 h-80 sm:w-28 sm:h-28 bg-red-200 rounded-full object-cover overflow-hidden mr-10">
                <Image
                  src={testimonial.imageSrc || "/placeholder-image.png"} // Fallback for missing image
                  alt={testimonial.imageAlt}
                  layout="fill" // Adjusts to content dimensions
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                {/* Testimonial Heading */}
                <h1 className="text-[1.5rem] uppercase text-gray-800 mb-1.5">
                  {testimonial.heading}
                </h1>
                {/* Testimonial Paragraph */}
                <p className="text-[1.2rem] text-gray-800 text-left">
                  {testimonial.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
