/** @format */

// src/data/contactData.ts
export interface ContactItem {
  icon: string;
  text: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

export const contactItems: ContactItem[] = [
  { icon: "FaPhone", text: "012 345 6789" },
  { icon: "FaEnvelope", text: "painting@mail.com" },
  { icon: "FaMapMarkerAlt", text: "Dublin - Ireland" },
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: "Facebook",
    url: "#",
    icon: "FaFacebook",
  },
  {
    platform: "Instagram",
    url: "#",
    icon: "FaInstagram",
  },
  {
    platform: "LinkedIn",
    url: "#",
    icon: "FaLinkedin",
  },
];
