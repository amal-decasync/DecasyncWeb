import Header from "@/components/layout/header/Header";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import Transform from "@/components/containers/services/Transform";
import Process from "@/components/containers/case-study/Process";
import ContactSection from "@/components/containers/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <ServiceDetailsBanner />
        <Transform />
        <Process />
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
