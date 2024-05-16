import Header from "@/components/layout/header/Header";
import ServiceBanner from "@/components/layout/banner/ServiceBanner";
import ServiceMain from "@/components/containers/services/ServiceMain";
import Sponsor from "@/components/containers/services/Sponsor";
import ServiceGallery from "@/components/containers/services/ServiceGallery";
import Testimonial from "@/components/containers/services/Testimonial";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <ServiceBanner />
        <ServiceMain />
        <Sponsor />
        <ServiceGallery />
        <Testimonial />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
