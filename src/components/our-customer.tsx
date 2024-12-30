"use client";

import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { customers } from "@/types/our-customer"; // Import your data

const OurCustomers: React.FC = () => {
  const x = useMotionValue(-100); // Controls the x-position of the carousel
  const width = customers.length * 100; // Adjust width based on number of items

  return (
    <div
      className="overflow-hidden relative h-48 w-full "

    >
      <motion.div
        className="flex absolute"
        style={{ x }}
        animate={{
          x: [0, -width], // Move from the start to the end of the items
        }}
        transition={{
          ease: "linear", // Smooth linear movement
          duration: customers.length * 3, // Adjust speed based on item count
          repeat: Infinity, // Infinite loop
        }}
      >
        {[...customers, ...customers].map((customer, index) => (
          // Duplicate the items for a seamless loop
          <div
            key={`${customer.id}-${index}`} // Ensure unique keys for duplicates
            className="flex-shrink-0 w-48 h-48 m-2 bg-gray-200 rounded-lg"
          >
            <img
              src={customer.imageSrc}
              alt={customer.alt || `Carousel Item ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCustomers;


