import HeroSection from "@/components/hero";
import Services from "@/components/services";
import AboutUs from "@/components/about-us";
import Testimonial from "@/components/testimonial";

const home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs/>
      <Testimonial/>
    </>
  );
};

export default home;
