import Header from "@/components/layout/header/Header";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import Sponsor from "@/components/containers/services/Sponsor";
import AboutService from "@/components/containers/about/AboutService";
import AboutCase from "@/components/containers/about/AboutCase";
import ServiceGallery from "@/components/containers/services/ServiceGallery";
import ContactSection from "@/components/containers/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import AboutStarter from "@/components/containers/about/AboutStarter";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <AboutBanner />
        <Sponsor />
        <AboutService />
        <AboutCase />
        <AboutStarter />
        <ServiceGallery />
        <ContactSection />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
