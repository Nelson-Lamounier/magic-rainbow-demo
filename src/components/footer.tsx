import React from "react";
import { footerConfig } from "@/types/footer";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconMap = {
  FaFacebookF: FaFacebookF,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
};

const Footer: React.FC = () => {
  const { copyright, socialLinks } = footerConfig;

  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="flex flex-col items-center">
        <p className="font-sans text-[1.2rem] text-[#e9e9e9] font-thin">{copyright}</p>
        <div className="flex space-x-20 ">
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.8rem] py-10 text-[#e9e9e9] hover:text-[#f5f5f5] transition-colors"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;