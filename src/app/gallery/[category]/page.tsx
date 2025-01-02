"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ImageGallery from "@/components/images"; // Import your gallery component
import { galleryCategories } from "@/types/images";
import Footer from "@/components/footer";
import ContactBar from "@/components/contact-stickbar";

// Utility to get category description
export const getCategoryDescription = (
  category: string
): string | undefined => {
  return galleryCategories.find((cat) => cat.category === category)
    ?.description;
};

const GalleryCategory: FC = () => {
  const { category } = useParams(); // Use useParams instead of useRouter
  const router = useRouter();

  if (!category || typeof category !== "string") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  // Get description for the category
  const description = getCategoryDescription(category);

  return (
    <>
    <ContactBar/>
      <div className="p-6 bg-gray-300">
        {/* Gallery Header */}
        <header className="p-20 flex flex-col items-start mb-10">
          <div className="text-center mt-8 mb-8">
            <button
              onClick={() => router.push("/")}
              className="text-gray-800 font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
             ←  Back to Home
            </button>
          </div>
          <h1 className="font-serif lg:text-[3rem] sm:text-[2.5rem] uppercase font-light text-gray-800 mb-5">
            {category}
            <div className="w-48 h-[3px] bg-gray-800 items-center"></div>
          </h1>
          <p className="text-gray-600 mt-2 text-[1.6rem] below-lg:text-[1.3rem]">
            {description}
          </p>
        </header>
        {/* Back to Home Button */}
        {/* Pass the category to ImageGallery for filtering */}
        <ImageGallery category={category} />
      </div>
      <Footer />
    </>
  );
};

export default GalleryCategory;
