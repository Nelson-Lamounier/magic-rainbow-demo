"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { servicesData, Service } from "@/types/services-description";
import { FaBrush, FaCloudSun, FaHandSparkles, FaScroll } from "react-icons/fa";

const iconMap = {
  FaScroll: FaScroll,
  FaCloudSun: FaCloudSun,
  FaBrush: FaBrush,
  FaHandSparkles: FaHandSparkles,
};

const ServiceDescription: FC = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="py-20  bg-gray-800">
          <div className="flex flex-col items-center mb-10">
        <h2 className="font-serif text-5xl font-light text-gray-200 mb-5">
          {servicesData.sectionTitle}
        </h2>
        <div className="w-48 h-[3px] bg-gray-200 "></div>
      </div>
    
    <div className=" py-20 relative flex justify-center">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl">
        {servicesData.services.map((service: Service) => {
          const IconComponent = iconMap[service.icon];
          const isFlipped = flippedId === service.id;

          return (
            <motion.div
              key={service.id}
              className="relative w-80 h-80 hover:scale-105 transition-transform duration-300"
              onClick={() => toggleFlip(service.id)}
            >
              {/* Flip Container */}
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                initial={{ rotateY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <IconComponent className="text-8xl text-gray-700 mb-4" />
                  <h1 className="font-serif font-thin tracking-[0.5rem] text-2xl my-8 text-gray-800 uppercase">
                    {service.title}
                  </h1>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gray-200 shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)", // Rotate back side
                  }}
                >
                  <p className="font-serif text-gray-600 text-[1.05rem] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
 
  );
};

export default ServiceDescription;
