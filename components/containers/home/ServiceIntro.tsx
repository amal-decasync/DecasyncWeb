import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/service/one.png";

const ServiceIntro = () => {
  return (
    <section className="tp-service pt-120 pb-120">
      <div className="container">
        <div className="row vertical-column-gap-md">
          <div className="col-12 col-lg-5">
            <div className="tp-service__thumb fade-img">
              <Link href="service-single" className="w-100">
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image
                      src={thumb}
                      className="w-100 mh-300 parallax-image"
                      alt="Image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="tp-service__content">
              <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                We Are Leading Digital Service Agency.
              </h2>
              <div className="pl-100">
                <p className="cur-lg">
                  Solve business problems and automate workflows with Artificial
                  Intelligence-based solutions. Unlock the hidden power of the
                  data you already have and hand the dull and repetitive work
                  that hampers the creativity.
                </p>
                <div className="mt-60">
                  <Link
                    href="service-single"
                    className="btn-anim btn-anim-light"
                  >
                    Explore Us
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
