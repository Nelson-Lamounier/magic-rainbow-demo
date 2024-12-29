"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { gallerySection } from "@/data/galleries";

const GalleriesComponent: React.FC = () => {
  return (
    <div className="py-20 bg-gray-300">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-serif text-5xl font-light text-gray-800 mb-5">
          {gallerySection.sectionTitle}
        </h2>
        <div className="w-48 h-[3px] bg-gray-800 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
        {gallerySection.galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <Image
              src={gallery.imageSrc}
              alt={gallery.title}
              layout="responsive" // Ensures the image is responsive
              width={16} // Aspect ratio width
              height={9} // Aspect ratio height
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Effect - Link */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={gallery.link}
                className="text-white text-lg font-semibold bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                View {gallery.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleriesComponent;
