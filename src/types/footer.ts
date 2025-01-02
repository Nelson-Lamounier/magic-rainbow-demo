export interface SocialLink {
    name: string; // Name of the social platform
    url: string;  // Link to the social platform
    icon: string; // React Icon name as string
  }
  
  export interface FooterConfig {
    copyright: string;      // Footer copyright text
    socialLinks: SocialLink[]; // Array of social links
  }

  export const footerConfig: FooterConfig = {
    copyright: "© 2024, Lamounier Web Developer - All Rights Reserved",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/magicrainbowpd",
        icon: "FaFacebookF",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/magicrainbow_pd/",
        icon: "FaInstagram",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/100253844",
        icon: "FaLinkedin",
      },
    ],
  }; 