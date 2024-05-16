import Header from "@/components/layout/header/Header";
import CareerBanner from "@/components/layout/banner/CareerBanner";
import OpenPosition from "@/components/containers/career/OpenPosition";
import Thrive from "@/components/containers/career/Thrive";
import MasonryGallery from "@/components/containers/career/MasonryGallery";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <CareerBanner />
        <OpenPosition />
        <Thrive />
        <MasonryGallery />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
