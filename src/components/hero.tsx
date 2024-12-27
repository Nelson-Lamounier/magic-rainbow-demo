"use client";
import { useState, useEffect } from "react";

import heroData from "@/data/hero.json";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [heroImages.length]);

  return (
    <header className="w-full h-screen overflow-hidden relative perspective-[100rem] bg-black/80">
      <div className="relative slider w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
                  {/* Overlay acting as the ::before */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      {/* Image */}
            <img
              src={image.url}
              alt={`Hero Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-20 left-20 z-30">
        <img src={logo} alt="Business Logo" className="w-40 h-40 rounded-lg" />
      </div>
      <div className="absolute top-[35%] left-[5%] w-[70%] z-20">
        <h1
          className="font-serif text-[6rem] leading-[6rem] text-[#e9e9e9] font-extrabold uppercase mb-8 tracking-[0.5rem] 
  md:text-[4rem] md:leading-[3rem] 
  sm:text-[2rem] sm:leading-[3rem]"
        >
          {heading}{" "}
          <span className="font-serif text-3xl text-[#e9e9e9] font-light mb-8 mr-4">
            {businessName}
          </span>
        </h1>
        <p
          className="font-serif text-[1.5rem] text-[#e9e9e9] font-normal mb-20 tracking-[0.1rem] leading-[2.5rem] 
  md:text-[2.5rem] 
  sm:text-[2.5rem] sm:mb-16"
        >
          {description}
        </p>
        <a
          href="#"
          className="font-serif text-2xl text-[#e9e9e9] font-bold uppercase no-underline border-[0.05rem] border-[#e9e9e9] px-8 py-4 transition-all duration-300 cursor-pointer tracking-[0.2rem] 
    hover:bg-gray-500 hover:text-[#e9e9e9] hover:border-transparent 
    md:w-[10rem] md:h-[5rem] md:text-[1rem] 
    sm:w-[5rem] sm:h-[4rem] sm:text-[0.5rem]"
        >
          {ctaText}
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
