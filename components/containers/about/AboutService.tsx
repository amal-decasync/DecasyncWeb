import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/service/two.png";
import thumbTwo from "@/public/images/service/three.png";

const AboutService = () => {
  return (
    <section className="tp-service pt-120 pb-120">
      <div className="container">
        <div className="row vertical-column-gap-md align-items-center">
          <div className="col-12 col-lg-5">
            <div className="tp-service__thumb fade-top fade-img">
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
              <h2 className="mt-8 title-anim text-secondary fw-7 mb-24 text-capitalize">
                Who we are
              </h2>
              <p className="cur-lg">
                Lorem ipsum dolor sit amet consectetur. Rhoncus turpis in
                placerat faucibus dignissim. Ac nisl varius rutrum tempus turpis
                duis ut ut tristique. Morbi netus pulvinar vitae malesuada.
                Dapibus commodo aliquam quis sit, Morbi netus pulvinar vitae
                malesuada. Dapibus commodo aliquam quis sit.
              </p>
              <div className="mt-40">
                <Link href="service-single" className="btn-line">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap-md align-items-center pt-120">
          <div className="col-12 col-lg-6">
            <div className="tp-service__content">
              <h2 className="mt-8 title-anim text-secondary fw-7 mb-24 text-capitalize">
                How we work
              </h2>
              <p className="cur-lg">
                Lorem ipsum dolor sit amet consectetur. Rhoncus turpis in
                placerat faucibus dignissim. Ac nisl varius rutrum tempus turpis
                duis ut ut tristique. Morbi netus pulvinar vitae malesuada.
                Dapibus commodo aliquam quis sit, Morbi netus pulvinar vitae
                malesuada. Dapibus commodo aliquam quis sit.
              </p>
              <div className="mt-40">
                <Link href="service-single" className="btn-line">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="tp-service__thumb fade-top fade-img">
              <Link href="service-single" className="w-100">
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image
                      src={thumbTwo}
                      className="w-100 mh-300 parallax-image"
                      alt="Image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
