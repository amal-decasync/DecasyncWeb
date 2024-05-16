import Header from "@/components/layout/header/Header";
import CaseSingle from "@/components/containers/case-study/CaseSingle";
import Process from "@/components/containers/case-study/Process";
import RelatedCase from "@/components/containers/case-study/RelatedCase";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <Header />
      <main>
        <CaseSingle />
        <Process />
        <RelatedCase />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
