"use client";

import {FC} from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { gallerySection } from "@/types/galleries";

import WithAnimation from "@/util/animation";

interface GalleriesComponentProps {
  excludeCategory?: string; // Current category to exclude
  sectionTitle?: string;
  gridColumnsClass?: string; // Dynamic grid column classes
}

const GalleriesComponent: FC<GalleriesComponentProps> = ({ excludeCategory, sectionTitle = gallerySection.sectionTitle, gridColumnsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",}) => {

  const filteredGalleries = gallerySection.galleries.filter(
    (gallery) => gallery.category !== excludeCategory
  );
  return (
    <section id="galleries" className="py-20 bg-gray-300">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-serif lg:text-[3rem] sm:text-[2.5rem] uppercase font-light text-gray-800 mb-5">
          {sectionTitle}
        </h2>
        <div className="w-48 h-[3px] bg-gray-800"></div>
      </div>
      <WithAnimation>
      {/* Galleries Grid */}
      <div className={`grid ${gridColumnsClass} gap-8 px-6 py-12`}>
        {filteredGalleries.map((gallery) => (
          <div
            key={gallery.id}
            className="relative w-70 h-60 group cursor-pointer rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <Image
              src={gallery.imageSrc}
              alt={gallery.title}
              layout="fill"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Effect - Link */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={`/gallery/${gallery.category}`}
                passHref
                className="text-white text-lg font-semibold bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                View{" "}
                {gallery.category.charAt(0).toUpperCase() +
                  gallery.category.slice(1)}
              </Link>
            </div>
          </div>
        ))}
      </div>
        </WithAnimation>
    </section>
  );
};

export default GalleriesComponent;
 