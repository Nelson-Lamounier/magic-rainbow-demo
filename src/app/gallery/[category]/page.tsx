"use client";

import { useParams } from "next/navigation";
import React from "react";
import ImageGallery from "@/components/images"; // Import your gallery component



const GalleryCategory: React.FC = () => {
    const { category } = useParams(); // Use useParams instead of useRouter


  if (!category || typeof category !== "string") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-center text-4xl font-bold my-6 capitalize">
        {category} Gallery
      </h1>
      {/* Pass the category to ImageGallery for filtering */}
      <ImageGallery category={category} />
    </div>
  );
};

export default GalleryCategory;