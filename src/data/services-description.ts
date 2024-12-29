// src/data/services-description.ts

export interface Service {
  id: number;
  icon: "FaScroll" | "FaCloudSun" | "FaBrush" | "FaHandSparkles"; // Specific icons
  title: string;
  description: string;
}

export interface ServiceSection {
  sectionTitle: string;
  services: Service[];
}

export const servicesData: ServiceSection = {
  sectionTitle: "Our Services",
  services: [
    {
      id: 1,
      icon: "FaScroll",
      title: "Wallpaper Hanging",
      description:
        "From residential spaces to commercial projects, we cater to every need and style preference. Our seamless process ensures a hassle-free experience, from initial consultation to final installation, leaving you with stunning walls that make a lasting impression.",
    },
    {
      id: 2,
      icon: "FaCloudSun",
      title: "Indoor & Outdoor Painting",
      description:
        "Whether it's a cozy living room, a sleek office space, or the exterior facade of your property, we approach each project with dedication and professionalism. With our personalized service and tailored solutions, we work closely with you to bring your vision to life, transforming your space into a reflection of your unique style and personality.",
    },
    {
      id: 3,
      icon: "FaBrush",
      title: "Coats & Restoration",
      description:
        "Whether it's a vintage home, a heritage building, or a beloved family heirloom, we have the expertise and experience to bring out its full potential. Our tailored solutions are designed to meet your unique needs, ensuring a seamless process from start to finish.",
    },
    {
      id: 4,
      icon: "FaHandSparkles",
      title: "Hand Painted Kitchen Cabinets",
      description:
        "With our hand-painted kitchen cabinets services, you can elevate the aesthetics of your kitchen while preserving its functionality and value. Our personalized approach ensures that every detail is tailored to your taste and lifestyle, creating a space that is as unique as you are.",
    },
  ],
};