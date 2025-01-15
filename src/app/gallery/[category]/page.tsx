"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { getCategoryDescription } from "@/util/getCategotyDescription";
import ImageGallery from "@/components/gallery/images";
import ContactBar from "@/components/contact-stickbar";
import Footer from "@/components/footer";
import Link from "next/link";



const GalleryCategory: FC = () => {
  const { category } = useParams(); // Use useParams instead of useRouter


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
      <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-serif lg:text-[3rem] sm:text-[2.5rem] uppercase font-light text-gray-200 mb-5 sm:text-7xl">
              {category}
            </h2>
            <p className="mt-8 font-sans text-lg font-medium text-gray-400 sm:text-xl/8">
              {description}
            </p>
          </div>
        <div className="mt-8">
          <Link
            href={"/"}
            className="text-gray-400 font-semibold rounded-lg hover:text-gray-200 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
        </div>
      </div>
      <ContactBar textColorClass="text-white-700" />
      <div className="p-6 bg-gray-300">
        {/* Pass the category to ImageGallery for filtering */}
        <ImageGallery category={category} />
      </div>
      <Footer />
    </>
  );
};

export default GalleryCategory;
