import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/case/one.png";
import two from "@/public/images/case/two.png";

const RelatedCase = () => {
  return (
    <section className="pt-120 pb-120 c-study fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <h2 className="mt-8 title-anim fw-7 text-secondary mb-24">
              Similar Case Studies
            </h2>
          </div>
        </div>
        <div className="row vertical-column-gap-lg">
          <div className="col-12 col-lg-6">
            <div className="c-study-single fade-top">
              <div className="thumb mb-24">
                <Link href="case-study-single" className="w-100">
                  <div className="parallax-image-wrap">
                    <div className="parallax-image-inner">
                      <Image
                        src={two}
                        className="w-100 mh-300 parallax-image"
                        alt="Image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="content">
                <Link href="case-study" className="mb-30 fw-6">
                  3D Render
                </Link>
                <h4 className="fw-6 mt-8 text-secondary">
                  <Link href="case-study-single">
                    3D computer graphics, or “3D graphics.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="c-study-single fade-top">
              <div className="thumb mb-24">
                <Link href="case-study-single" className="w-100">
                  <div className="parallax-image-wrap">
                    <div className="parallax-image-inner">
                      <Image
                        src={one}
                        className="w-100 mh-300 parallax-image"
                        alt="Image"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="content">
                <Link href="case-study" className="mb-30 fw-6">
                  3D Render
                </Link>
                <h4 className="fw-6 mt-8 text-secondary">
                  <Link href="case-study-single">
                    Artificial intelligence is the simulation of human
                    processes.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCase;
