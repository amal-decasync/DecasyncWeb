import Link from "next/link";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <div className="tp-app">
      <div className="tp-error pt-120 pb-120 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h1 className="fw-7 text-uppercase mt-8">404 ERROR</h1>
              <p className="text-xl fw-5 mt-12">Page Not Found</p>
              <div className="mt-40 d-flex justify-content-center">
                <Link href="/" className="btn-anim btn-anim-light">
                  Go Home
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InitCustomCursor />
      <ScrollProgressButton />
      <InitAnimations />
    </div>
  );
};

export default page;
