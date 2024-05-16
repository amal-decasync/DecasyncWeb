import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Overview from "@/components/containers/home/Overview";
import Story from "@/components/containers/home/Story";
import Testimonial from "@/components/containers/services/Testimonial";
import ServiceIntro from "@/components/containers/home/ServiceIntro";
import LatestPost from "@/components/containers/blog/LatestPost";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <Banner />
        <Overview />
        <Story />
        <Testimonial />
        <ServiceIntro />
        <LatestPost />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
