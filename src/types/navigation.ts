/** @format */

export interface NavLink {
  label: string; // Label for the navigation link
  href: string; // Anchor href value
}

export interface SocialLink {
  name: string; // Name of the social platform
  url: string; // Link to the social platform
  icon: string; // Icon name as string
}

export interface NavigationConfig {
  links: NavLink[]; // Array of navigation links
  socialLinks: SocialLink[]; // Array of social links
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonial" },
    { label: "Services", href: "#services-description" },
    { label: "Galleries", href: "#galleries" },
    { label: "Vertical Print", href: "#vertical-print" },
    { label: "Contact", href: "#contact" },
  ],
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
