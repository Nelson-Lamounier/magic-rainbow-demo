/** @format */

export interface HeroImage {
  url: string;
}

export interface HeroData {
  heroImages: HeroImage[];
  logo: string;
  heading: string;
  businessName: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const heroData: HeroData = {
  heroImages: [
    {
      url: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-img/image1.jpg",
    },
    {
      url: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-img/image2.jpg",
    },
    {
      url: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-img/image3.jpg",
    },
  ],
  logo: "https://demo-websites-resources.s3.eu-west-1.amazonaws.com/MagicRainbow+catalog/A_flat-style_vector_illustration_features_a_paint_.png",
  heading: "Welcome to",
  businessName: "My Painting & Decorating",
  description:
    "Dublin-based business, specializing in all aspects of interior and exterior painting and decorating.",
  ctaText: "Request a Quote",
  ctaLink: "#contact",
};
