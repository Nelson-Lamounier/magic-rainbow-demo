"use client";

import React, { useEffect, forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { customers, Customer } from "@/data/our-customer"; // Import your data

// Create a motion-compatible Image component
const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image width={150} height={150} layout="responsive" {...props} ref={ref} />;
  }
);

// Update this line
const MotionImage = motion.create(ExoticImage);

// Carousel Item Component
const CarouselItem = ({
  i,
  index,
  totalItems,
}: {
  i: Customer;
  index: number;
  totalItems: number;
}) => {
  const x = useMotionValue(2);
  const controls = useAnimationControls();

  const pic = (
    <MotionImage
      style={{ x }}
      src={i.imageSrc} // Access the image source from Customer data
      height={50}
      width={50}
      alt={i.alt || `Customer ${index + 1}`} // Use `alt` if available
      animate={controls}
      className="rounded-lg drop-shadow-lg"
    />
  );


// Set up motion value events and animation
useMotionValueEvent(x, 'animationComplete', () => {
    controls.set({ x: 250});
    controls.start({
      x: -250,
      transition: {
        ease: 'linear',
        duration: 5,
      },
    });
    console.log("Current x value on animationComplete:", x.get());
  });

  useEffect(() => {
    controls.set({ x: -250 });
    setTimeout(() => {
      controls.start({
        x: -250,
        transition: {
          ease: "linear",
          duration: 5,
        },
      });
    }, index * 1000);
  }, [controls, index, totalItems]);

  return pic;
};

// Carousel Component
const OurCustomers: React.FC = () => {
  const totalItems = customers.length;
  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-5xl font-light text-gray-800 mb-5">Our Customers</h1>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-4"></div>
      </div>
      <div className="relative flex overflow-hidden">
        {customers.map((i, index) => (
          <CarouselItem
            i={i}
            index={index}
            key={index}
            totalItems={totalItems}
          />
        ))}
      </div>
    </section>
  );
};

export default OurCustomers;
