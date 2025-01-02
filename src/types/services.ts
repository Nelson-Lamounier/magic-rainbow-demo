// Define the interface for each service
export interface Service {
  id: number;
  icon: string; // Icon name as a string (e.g., "FaClock")
  title: string;
  description: string;
}

// Define the array of services
export const services: Service[] = [
  {
    id: 1,
    icon: "FaClock",
    title: "Fast Service",
    description:
      "We understand the importance of time and efficiency. That's why we take pride in offering fast and reliable painting and decorating services to meet your deadlines and exceed your expectations.",
  },
  {
    id: 2,
    icon: "FaMedal",
    title: "Quality Guaranteed",
    description:
      "We stand behind the quality of our workmanship. With our commitment to excellence and attention to detail, we guarantee a result that exceeds your expectations.",
  },
  {
    id: 3,
    icon: "FaBrush",
    title: "Experienced Team",
    description:
      "Our success is built on the foundation of our highly skilled and experienced team of painters and decorators. With years of collective expertise, we are dedicated to delivering exceptional results.",
  },
];