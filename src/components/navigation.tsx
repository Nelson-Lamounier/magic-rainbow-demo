"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { navigationConfig, NavigationConfig, NavLink, SocialLink  } from "@/types/navigation";


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

  return (
    <div className="relative z-50 ">
      {!isImageGalleryPage && (
        <button
          className="fixed top-4 left-4 z-40 text-2xl bg-gray-800 text-white p-2 rounded"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {!isImageGalleryPage && (
          <ul className="mt-12 space-y-4 px-4">
            {links.map((link: NavLink) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={toggleSidebar}
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center mt-8 space-x-4">
          {socialLinks.map((link: SocialLink) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-500"
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