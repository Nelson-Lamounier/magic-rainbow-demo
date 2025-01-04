"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/types/images"; // Assuming galleryCategories contains the category list
import GalleriesComponent from "./galleries";

interface ImageGalleryProps {
  category: string; // Define the category prop
}

const ImageGallery: FC<ImageGalleryProps> = ({ category }) => {
  // State for modal functionality
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  // Filter images based on the category
  const filteredImages = images.filter((image) => image.category === category);

  // Handle opening the modal
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
  };
  // Handle closing the modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Navigate to the previous image
  const prevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  // Navigate to the next image
  const nextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % filteredImages.length);
    }
  };

  return (
    <>
      <div className="p-6">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openModal(index)}
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

        {/* Modal */}
        {currentImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-6xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative w-full max-w-5xl">
              <motion.img
                src={filteredImages[currentImageIndex].url}
                alt={filteredImages[currentImageIndex].title}
                className="w-full max-h-screen object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Left Arrow */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
                onClick={prevImage}
              >
                &#8249;
              </button>
              {/* Right Arrow */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-8xl"
                onClick={nextImage}
              >
                &#8250;
              </button>
            </div>
          </div>
        )}

        {/* Other Categories Section */}
        <div className="mt-16 items-center">
          <GalleriesComponent
            excludeCategory={category}
            sectionTitle="Explore Other Projects"
            gridColumnsClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
