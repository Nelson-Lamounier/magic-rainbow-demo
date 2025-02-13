export interface Testimonial {
  id: number;
  imageSrc: string; // URL of the image or empty string if not available
  imageAlt: string; // Alternative text for the image
  heading: string; // Testimonial heading
  paragraph: string; // Testimonial paragraph
}

export interface TestimonialsData {
  videoSrc: string; // Video source URL
  testimonials: Testimonial[]; // Array of testimonials
}

export const testimonialsData: TestimonialsData = {
  videoSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/video/landscape.mp4",
  testimonials: [
    {
      id: 1,
      imageSrc: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/external+logos/kill-pharmacy.jpg",
      imageAlt: "Kill Pharmacy logo",
      heading: "Say goodbye to damage walls, hello to a stylish business",
      paragraph: "Thanks so much to Magic Rainbow for making Kill Pharmacy look so shiny and new! Such a great, professional and hardworking team. Highly recommend them.",
    },
    {
      id: 2,
      imageSrc: "",
      imageAlt: "Customer portrait",
      heading: "I enjoyed this great tour",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas, repudiandae veritatis nam mollitia cumque distinctio, quia aperiam aliquid at consequuntur libero quisquam facilis laborum inventore repellat perspiciatis vel fugiat molestias recusandae eum necessitatibus quo possimus aspernatur? Nobis, architecto eaque.",
    },
  ],
};