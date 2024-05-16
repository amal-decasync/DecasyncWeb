import Header from "@/components/layout/header/Header";
import CaseItems from "@/components/containers/case-study/CaseItems";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <CaseItems />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
