import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/start-thumb.png";

const AboutStarter = () => {
  return (
    <section className="tp-gallery pt-120 bg-black position-relative overflow-x-clip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-gallery-inner pb-120">
              <div className="row vertical-column-gap-md align-items-center fade-wrapper">
                <div className="col-12 col-lg-6">
                  <div className="tp-gallery__content">
                    <h2 className="fw-7 text-white title-anim mt-8 mb-24">
                      How it all started
                    </h2>
                    <p className="text-white cur-lg">
                      It began as a dream of three friends to create a workplace
                      where they would always want to work - with meaningful and
                      interesting projects, technical challenges to solve and
                      one where people are the main focus. Year by year the
                      Itify.
                    </p>
                    <div className="mt-40">
                      <Link
                        href="services"
                        className="text-white btn-line text-uppercase"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-5 offset-xl-1">
                  <div className="tp-gallery__thumb fade-top fade-img">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={thumb}
                          className="mh-300 unset parallax-image"
                          alt="Image"
                        />
                      </div>
                    </div>
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

export default AboutStarter;
