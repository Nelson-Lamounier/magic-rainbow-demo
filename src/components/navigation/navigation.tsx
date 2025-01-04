"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaArrowLeft,
  FaAlignLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  navigationConfig,
  NavigationConfig,
  NavLink,
  SocialLink,
} from "@/types/navigation";

const iconMap = {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
};

const Navigation: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // Next.js equivalent of `useLocation`

  const { links, socialLinks }: NavigationConfig = navigationConfig;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Determine if the current route is the ImageGallery
  const isImageGalleryPage = pathname.startsWith("/gallery");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="relative z-50 ">
      {!isImageGalleryPage && (
        <button
          className="fixed top-6 left-4 z-40 text-[1.5rem] bg-transparent font-light text-white p-2 "
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaArrowLeft /> : <FaAlignLeft />}
        </button>
      )}

      <div
        className={`fixed top-0 left-0 lg:w-80 md:w-full sm:w-full h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {!isImageGalleryPage && (
          <ul className="mt-[5rem] space-y-6 px-4 font-serif text-[1.2rem] font-normal tracking-[0.5rem] list-none p-0 uppercase flex flex-col items-center sm:items-start">
            {links.map((link: NavLink) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.href.replace("#", ""))
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                    toggleSidebar();
                  }}
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center mt-8 space-x-10 flex justify-center text-center absolute bottom-0 w-full p-8">
          {socialLinks.map((link: SocialLink) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[1.8rem] hover:text-gray-700"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
