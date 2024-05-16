import Header from "@/components/layout/header/Header";
import JobSingle from "@/components/containers/career/JobSingle";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <JobSingle />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
