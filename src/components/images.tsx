"use client";

import React from "react";

import { motion } from "framer-motion";
import { images } from "@/types/images"; 

interface ImageGalleryProps {
    category: string; // Define the category prop
  }

const ImageGallery: React.FC<ImageGalleryProps> = ({ category }) => {

  // Filter images based on the category
  const filteredImages = images.filter((image) => image.category === category);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {filteredImages.map((image, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        </motion.div>
      ))}
      {filteredImages.length === 0 && (
        <p className="col-span-full text-center text-gray-600 text-lg">
          No images found for this category.
        </p>
      )}
    </div>
  );
};

export default ImageGallery;