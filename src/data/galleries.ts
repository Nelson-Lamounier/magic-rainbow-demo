export interface Gallery {
    id: string;
    title: string;
    imageSrc: string;
    link: string;
  }

  export interface GallerySection {
    sectionTitle: string;
    galleries: Gallery[];
  }
  
  export const gallerySection: GallerySection = {
    sectionTitle: "Our Gallery",
    galleries: [
      {
        id: "interior",
        title: "Interior",
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-galeries-imgs/interio-thum.jpg",
        link: "/gallery/interior",
      },
      {
        id: "exterior",
        title: "Exterior",
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-galeries-imgs/exterior-thum.jpg",
        link: "/gallery/exterior",
      },
      {
        id: "kitchen",
        title: "Kitchen",
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-galeries-imgs/kitchen-thum.jpg",
        link: "/gallery/kitchen",
      },
      {
        id: "wooden",
        title: "Wooden",
        imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/hero-galeries-imgs/wood-thum.jpg",
        link: "/gallery/wooden",
      },
    ],
  };