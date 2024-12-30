"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { heroData } from "@/types/hero"; // Import the updated TypeScript file

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const {
    heroImages,
    logo,
    heading,
    businessName,
    description,
    ctaText,
    ctaLink,
  } = heroData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [heroImages.length]);

  return (
    <header className="w-full h-screen overflow-hidden relative bg-black/80 perspective-[100rem]">
      {/* Hero Image Slider */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

            {/* Image (full coverage) */}
            <Image
              src={image.url}
              alt={`Hero Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0} // Preload the first image
            />
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 sm:top-10 sm:left-10 lg:top-20 lg:left-20 z-30">
        <Image
          src={logo}
          alt="Business Logo"
          className="rounded-lg"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Hero Text */}
      <div
        className="
          font-sans
          absolute
          top-[30%]
          left-[5%]
          w-[90%]
          sm:w-[70%]
          md:w-[60%]
          lg:w-[50%]
          xl:w-[50%]
          z-20
        "
      >
        <h1
          className="
            text-[1.8rem]
            sm:text-[2rem]
            lg:text-[3rem]
            xl:text-[2.5rem]
            font-thin
            text-[#e9e9e9]
            font-extrabold
            uppercase
            tracking-[0.3rem]
            sm:tracking-[0.5rem]
            mb-4
          "
        >
          {heading}
        </h1>

        <span
          className="
            block
            text-[2.2rem]
            sm:text-[3rem]
            lg:text-[3.5rem]
            xl:text-[4.5rem]
            leading-[2.5rem]
            sm:leading-[3rem]
            lg:leading-[4.5rem]
            text-[#e9e9e9]
            font-black
            mb-4
          "
        >
          {businessName}
        </span>

        <p
          className="
            text-[1.4rem]
            sm:text-[1.6rem]
            md:text-[2rem]
            xl:text-[2rem]
            text-[#e9e9e9]
            font-normal
            tracking-[0.2rem]
            sm:tracking-[0.3rem]
            leading-[1.5rem]
            sm:leading-[2.5rem]
            md:leading-[2.5rem]
            xl:leading-[2rem]
            mb-20
            sm:mb-15
            md:mb-10
          "
        >
          {description}
        </p>

        <a
          href={ctaLink}
          className="
            inline-block
            text-[1.2rem]
            sm:text-[1.2rem]
            md:text-[1.4rem]
            text-[#e9e9e9]
            font-bold
            uppercase
            tracking-[0.15rem]
            sm:tracking-[0.2rem]
            no-underline
            border border-[#e9e9e9]
            px-6
            py-2
            sm:px-4
            sm:py-2
            transition-all
            duration-300
            cursor-pointer
            hover:bg-gray-800
            hover:border-transparent
          "
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
