export interface VideoData {
  src: string;
  poster: string;
}

export interface AboutUsData {
  heading: string;
  video: VideoData;
  description: string;
}

export const aboutUsData: AboutUsData = {
  heading: "About Us",
  video: {
    src: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/video/Reels+Magic.mp4",
    poster: "https://magicrainbow.s3.eu-west-1.amazonaws.com/gallery/catalog/Wood/image3.jpg",
  },
  description:
    "Maciej and his team specialise in all aspects of interior and exterior painting and decorating. Clients include home owners, schools, historical buildings and more. We use only the very best materials and techniques in order to get the best finish possible. On-time completion guaranteed with a 13 year track record of success.",
};