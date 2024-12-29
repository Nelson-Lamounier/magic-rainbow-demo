import React from "react";
import { FaClock, FaMedal, FaBrush } from "react-icons/fa";
import { services, Service } from "@/data/services"; // Import the services data and type

// Map icons to their respective components
const iconMap = {
  FaClock: FaClock,
  FaMedal: FaMedal,
  FaBrush: FaBrush,
};

const Services: React.FC = () => {
  return (
    <section className="bg-gray-300 py-10 relative">
      <div className="flex justify-center px-40">
        <div className="icon-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-[#373737]">
          {services.map((service: Service) => {
            // Dynamically resolve the icon component
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="flex flex-col items-center text-center">
                {Icon ? (
                  <Icon className="text-6xl mb-4 text-gray-800" />
                ) : (
                  <div className="text-6xl mb-4 text-gray-800">?</div> // Fallback for missing icons
                )}
                <h1 className="font-serif font-thin tracking-[0.5rem] text-3xl my-8">
                  {service.title}
                </h1>
                <p className="font-serif text-2xl my-8 mx-8 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;