"use client";

import React from "react";
import { contactItems, socialMediaLinks } from "@/types/contact-data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconMap = {
  FaPhone: FaPhone,
  FaEnvelope: FaEnvelope,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
};

const ContactBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white py-4 px-6">
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
        {contactItems.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div key={index} className="flex items-center space-x-2">
              <IconComponent className="text-xl" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        {socialMediaLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500 transition-colors"
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactBar;