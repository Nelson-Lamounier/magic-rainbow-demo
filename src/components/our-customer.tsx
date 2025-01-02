"use client";

import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { customersData, Customer } from "@/types/our-customer"; // Import your data

const OurCustomers: React.FC = () => {
  const x = useMotionValue(-100); // Controls the x-position of the carousel
  const width = customersData.customer.length * 100; // Adjust width based on number of items

  return (
    <section id="our-customers" className="py-20 relative bg-[#fff]">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-serif lg:text-[3rem] sm:text-[2.5rem] uppercase font-light text-gray-800 mb-5">
          {customersData.sectionTitle}
        </h2>
        <div className="w-48 h-[3px] bg-gray-800 "></div>
      </div>

      <div className="overflow-hidden relative h-[10rem] w-full ">
        <motion.div
          className="flex absolute"
          style={{ x }}
          animate={{
            x: [0, -width], // Move from the start to the end of the items
          }}
          transition={{
            ease: "linear", // Smooth linear movement
            duration: customersData.customer.length * 3, // Adjust speed based on item count
            repeat: Infinity, // Infinite loop
          }}
        >
          {[...customersData.customer, ...customersData.customer].map(
            (customer, index) => (
              // Duplicate the items for a seamless loop
              <div
                key={`${customer.id}-${index}`} // Ensure unique keys for duplicates
                className="flex-shrink-0  h-[10rem] m-2  rounded-lg"
              >
                <img
                  src={customer.imageSrc}
                  alt={customer.alt || `Carousel Item ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCustomers;
