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
    { icon: "FaPhone", text: "(+353) 087 746 9056" },
    { icon: "FaEnvelope", text: "tarlowskimaciej@gmail.com" },
    { icon: "FaMapMarkerAlt", text: "Dublin - Ireland" },
  ];
  
  export const socialMediaLinks: SocialMediaLink[] = [
    { platform: "Facebook", url: "https://www.facebook.com/magicrainbowpd", icon: "FaFacebook" },
    { platform: "Instagram", url: "https://www.instagram.com/magicrainbow_pd/", icon: "FaInstagram" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/100253844", icon: "FaLinkedin" },
  ];