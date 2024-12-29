import HeroSection from "@/components/hero";
import Services from "@/components/services";
import AboutUs from "@/components/about-us";
import Testimonial from "@/components/testimonial";
import ServiceDescription from "@/components/service.description";
import GalleriesComponent from "@/components/galleries";
import OurCustomers from "@/components/our-customer";
import SisterCompany from "@/components/sister-company";

const home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs/>
      <Testimonial/>
      <ServiceDescription/>
      <GalleriesComponent/>
      <OurCustomers />
      <SisterCompany/>
    </>
  );
};

export default home;
