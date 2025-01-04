"use client";

import {FC, useEffect, useState } from "react";
import { contactItems, socialMediaLinks } from "@/types/contact-data";
import {
  FaPhoneAlt ,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

interface ContactBarComponentProps {
  textColorClass?: string;
}

const iconMap = {
  FaPhone: FaPhoneAlt ,
  FaEnvelope: FaEnvelope,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
};

const ContactBar: FC<ContactBarComponentProps> = ({textColorClass= "text-gray-300"}) => {
    const [isScrolled, setIsScrolled] = useState(false);

  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY === 0) {
          setIsScrolled(false);
        } else if (window.scrollY > 399) {
          setIsScrolled(true);
        }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    return (
<div
  className={`${
    isScrolled ? "bg-gray-800" : "bg-transparent"
  } flex justify-between items-center ${textColorClass} font-sans font-light fixed top-0 w-full z-40 text-[1.5rem] py-7 px-[20rem] sm:py-6 sm:px-10 lg:py-6 lg:px-[5rem]   transition-colors duration-300`}
>
  {/* Contact Info */}
  <div className="hidden lg:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 lg:space-x-16">
    {contactItems.map((item, index) => {
      const IconComponent = iconMap[item.icon as keyof typeof iconMap];
      return (
        <div
          key={index}
          className="flex items-center space-x-3 lg:space-x-4 text-sm lg:text-base"
        >
          <IconComponent className="text-lg lg:text-xl" />
          <span>{item.text}</span>
        </div>
      );
    })}
  </div>

  {/* Social Media Links */}
  <div className="flex justify-center sm:ml-[25rem] md:ml-[34rem] lg:ml-[5rem] space-x-6  mt-4 ">
    {socialMediaLinks.map((link, index) => {
      const IconComponent = iconMap[link.icon as keyof typeof iconMap];
      return (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[1.5rem] px-2 hover:text-gray-700 transition-all duration-300 ease-in-out`}
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
