"use client";
import React from "react";
import { FaClock, FaMedal, FaBrush } from "react-icons/fa";
import { services, Service } from "@/types/services"; // Import the services data and type
import WithAnimation from "@/util/animation"; // Import WithAnimation HOC

// Map icons to their respective components
const iconMap = {
  FaClock: FaClock,
  FaMedal: FaMedal,
  FaBrush: FaBrush,
};

const Services: React.FC = () => {
  return (
    <section
      className="
        bg-gray-300
        py-10
        sm:py-16
        md:py-20
        relative
      "
    >
      <div
        className="
          flex
          justify-center
          px-4
          sm:px-6
          md:px-10
          lg:px-16
          xl:px-32
          2xl:px-60
        "
      >
        <div
          className="
            icon-wrapper
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            sm:gap-8
            text-[#373737]
            w-full
            max-w-[1920px]  
          "
        >
          {services.map((service: Service) => {
            // Dynamically resolve the icon component
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              // Wrap individual service items with WithAnimation
              <WithAnimation
                key={service.id}
                className="flex flex-col items-center text-center"
              >
                {Icon ? (
                  <Icon
                    className="
                      text-4xl
                      sm:text-2xl
                      md:text-3xl
                      xl:text-5xl
                      2xl:text-6xl
                      mb-4
                      text-gray-800
                    "
                  />
                ) : (
                  <div
                    className="
                      text-4xl
                      sm:text-5xl
                      md:text-6xl
                      xl:text-7xl
                      2xl:text-8xl
                      mb-4
                      text-gray-800
                    "
                  >
                    ?
                  </div>
                )}
                <h1
                  className="
                    font-sans
                    font-normal
                    tracking-[0.1rem]
                    sm:tracking-[0.3rem]
                    md:tracking-[0.5rem]
                    text-2xl
                    sm:text-1xl
                    md:text-2xl
                    xl:text-3xl
                    my-4
                    sm:my-6
                    md:my-8
                  "
                >
                  {service.title}
                </h1>
                <p
                  className="
                    font-serif
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    xl:text-2xl
                    my-2
                    sm:my-3
                    md:my-6
                    mx-2
                    sm:mx-4
                    md:mx-6
                    xl:mx-12
                    leading-relaxed
                  "
                >
                  {service.description}
                </p>
              </WithAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
