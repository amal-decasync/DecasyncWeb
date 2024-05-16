import Image from "next/image";
import Link from "next/link";
import four from "@/public/images/service/four.png";
import five from "@/public/images/service/five.png";
import six from "@/public/images/service/six.png";
import seven from "@/public/images/service/seven.png";
import eight from "@/public/images/service/eight.png";

const ServiceMain = () => {
  return (
    <section className="tp-service pt-120 fade-wrapper" id="scroll-to">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-hr pb-120">
              <div className="row vertical-column-gap-md">
                <div className="col-12 col-lg-7">
                  <div className="tp-service__content">
                    <span className="op-text mb-40 mt-8">01</span>
                    <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                      Artificial Intelligence
                    </h2>
                    <div className="pl-100">
                      <p className="cur-lg">
                        Solve business problems and automate workflows with
                        Artificial Intelligence-based solutions. Unlock the
                        hidden power of the data you already have and hand the
                        dull and repetitive work that hampers the creativity of
                        your staff over to machines.
                      </p>
                      <div className="mt-60">
                        <Link
                          href="service-single"
                          className="btn-anim btn-anim-light"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1">
                  <div className="tp-service__thumb fade-top fade-img">
                    <Link href="service-single" className="w-100">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={four}
                            className="w-100 mh-400 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-hr pt-120 pb-120">
              <div className="row vertical-column-gap-md">
                <div className="col-12 col-lg-5 col-xxl-4">
                  <div className="tp-service__thumb fade-top fade-img">
                    <Link href="service-single" className="w-100">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={five}
                            className="w-100 mh-400 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-7 offset-xxl-1">
                  <div className="tp-service__content">
                    <span className="op-text mb-40 mt-8">02</span>
                    <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                      Product Design
                    </h2>
                    <div className="pl-100">
                      <p className="cur-lg">
                        Solve business problems and automate workflows with
                        Artificial Intelligence-based solutions. Unlock the
                        hidden power of the data you already have and hand the
                        dull and repetitive work that hampers the creativity of
                        your staff over to machines.
                      </p>
                      <div className="mt-60">
                        <Link
                          href="service-single"
                          className="btn-anim btn-anim-light"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-hr  pt-120 pb-120">
              <div className="row vertical-column-gap-md">
                <div className="col-12 col-lg-7">
                  <div className="tp-service__content">
                    <span className="op-text mb-40 mt-8">03</span>
                    <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                      Mobile Application Development
                    </h2>
                    <div className="pl-100">
                      <p className="cur-lg">
                        Solve business problems and automate workflows with
                        Artificial Intelligence-based solutions. Unlock the
                        hidden power of the data you already have and hand the
                        dull and repetitive work that hampers the creativity of
                        your staff over to machines.
                      </p>
                      <div className="mt-60">
                        <Link
                          href="service-single"
                          className="btn-anim btn-anim-light"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1">
                  <div className="tp-service__thumb fade-top fade-img">
                    <Link href="service-single" className="w-100">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={six}
                            className="w-100 mh-400 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-hr pt-120 pb-120">
              <div className="row vertical-column-gap-md">
                <div className="col-12 col-lg-5 col-xxl-4">
                  <div className="tp-service__thumb fade-top fade-img">
                    <Link href="service-single" className="w-100">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={seven}
                            className="w-100 mh-400 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-7 offset-xxl-1">
                  <div className="tp-service__content">
                    <span className="op-text mb-40 mt-8">04</span>
                    <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                      Web Application Development
                    </h2>
                    <div className="pl-100">
                      <p className="cur-lg">
                        Solve business problems and automate workflows with
                        Artificial Intelligence-based solutions. Unlock the
                        hidden power of the data you already have and hand the
                        dull and repetitive work that hampers the creativity of
                        your staff over to machines.
                      </p>
                      <div className="mt-60">
                        <Link
                          href="service-single"
                          className="btn-anim btn-anim-light"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-hr pt-120 pb-120">
              <div className="row vertical-column-gap-md">
                <div className="col-12 col-lg-7">
                  <div className="tp-service__content">
                    <span className="op-text mb-40 mt-8">05</span>
                    <h2 className="mt-8 title-anim text-secondary fw-7 mb-30 text-capitalize">
                      Idea Evaluation
                    </h2>
                    <div className="pl-100">
                      <p className="cur-lg">
                        Solve business problems and automate workflows with
                        Artificial Intelligence-based solutions. Unlock the
                        hidden power of the data you already have and hand the
                        dull and repetitive work that hampers the creativity of
                        your staff over to machines.
                      </p>
                      <div className="mt-60">
                        <Link
                          href="service-single"
                          className="btn-anim btn-anim-light"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1">
                  <div className="tp-service__thumb fade-top fade-img">
                    <Link href="service-single" className="w-100">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={eight}
                            className="w-100 mh-400 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;
