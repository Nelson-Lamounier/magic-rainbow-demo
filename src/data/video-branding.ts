export const videoData = {
  title: "Exciting news!",
  videoUrl:
    "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/video/Mona-Lisa-vps.mp4",
  posterUrl:
    "https://artwallireland.s3.eu-west-1.amazonaws.com/email-marketing/retail/images-retail/lamounier_91432_a_photo_of_an_illustration_art_printed_on_a_ret_a3be3068-8ab4-4fb0-b1d1-26832949ba4a.png",
  description:
    "We're thrilled to expand our offerings beyond traditional painting and decorating services to now include cutting-edge vertical printing solutions. We're always on the forefront of innovation, and our new vertical printing service is no exception. Whether you're looking to add a bold statement piece to your home, create a captivating mural in your office space, or enhance the ambiance of your business with custom branding, our vertical printing service offers endless possibilities.",
  linkUrl: "https://artwallireland.ie/",
  linkText: "ArtWall Vertical Printing",
};

export interface VideoData {
  src: string;
  poster: string;
}

export interface SisterCompany {
  heading: string;
  video: VideoData;
  description: string;
  linkUrl: string;
  linkText: string;
}

export const sisterCompanyData: SisterCompany = {
  heading: "Exciting news!",
  video: {
    src: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/video/Mona-Lisa-vps.mp4",
    poster:
      "https://artwallireland.s3.eu-west-1.amazonaws.com/email-marketing/retail/images-retail/lamounier_91432_a_photo_of_an_illustration_art_printed_on_a_ret_a3be3068-8ab4-4fb0-b1d1-26832949ba4a.png",
  },
  description:
    "We're thrilled to expand our offerings beyond traditional painting and decorating services to now include cutting-edge vertical printing solutions. We're always on the forefront of innovation, and our new vertical printing service is no exception. Whether you're looking to add a bold statement piece to your home, create a captivating mural in your office space, or enhance the ambiance of your business with custom branding, our vertical printing service offers endless possibilities.",
  linkUrl: "https://artwallireland.ie/",
  linkText: "ArtWall Vertical Printing",
};
