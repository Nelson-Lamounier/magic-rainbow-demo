/** @format */

export interface SocialLink {
  name: string; // Name of the social platform
  url: string; // Link to the social platform
  icon: string; // React Icon name as string
}

export interface FooterConfig {
  copyright: string; // Footer copyright text
  socialLinks: SocialLink[]; // Array of social links
}

export const footerConfig: FooterConfig = {
  copyright: "© 2024, Lamounier Digital - All Rights Reserved",
  socialLinks: [
    {
      name: "Facebook",
      url: "#",
      icon: "FaFacebookF",
    },
    {
      name: "Instagram",
      url: "#",
      icon: "FaInstagram",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "FaLinkedin",
    },
  ],
};
