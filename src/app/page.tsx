import HeroSection from "@/components/hero";
import Services from "@/components/services/services";
import AboutUs from "@/components/about-us";
import Testimonial from "@/components/testimonial";
import ServiceDescription from "@/components/services/service.description";
import GalleriesComponent from "@/components/gallery/galleries";
import OurCustomers from "@/components/our-customer";
import SisterCompany from "@/components/sister-company";
import ContactForm from "@/components/form/contact-form";
import Footer from "@/components/footer";
import ContactBar from "@/components/contact-stickbar";


const home = () => {
  return (
    <>
      <ContactBar />
      <HeroSection />
      <Services />
      <AboutUs/>
      <Testimonial/>
      <ServiceDescription/>
      <GalleriesComponent/>
      <OurCustomers />
      <SisterCompany/>
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default home;
