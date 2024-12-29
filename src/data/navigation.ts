export interface NavLink {
    label: string; // Label for the navigation link
    href: string;  // Anchor href value
  }
  
  export interface SocialLink {
    name: string; // Name of the social platform
    url: string;  // Link to the social platform
    icon: string; // Icon name as string
  }
  
  export interface NavigationConfig {
    links: NavLink[];       // Array of navigation links
    socialLinks: SocialLink[]; // Array of social links
  }

  export const navigationConfig: NavigationConfig = {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Services", href: "#key-services" },
      { label: "Galleries", href: "#galleries" },
      { label: "Vertical Print", href: "#vertical-print" },
      { label: "Contact", href: "#contact" }
    ],
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/magicrainbowpd",
        icon: "FaFacebookF"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/magicrainbow_pd/",
        icon: "FaInstagram"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/100253844",
        icon: "FaLinkedin"
      }
    ]
  };