import Image from "next/image";
import poster from "@/public/images/case/poster.png";
import project from "@/public/images/case/project.png";
import nine from "@/public/images/case/nine.png";
import ten from "@/public/images/case/ten.png";
import eleven from "@/public/images/case/eleven.png";
import twelve from "@/public/images/case/twelve.png";

const CaseSingle = () => {
  return (
    <section className="c-details fix-top pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-details-intro">
              <h2 className="mt-8 text-secondary title-anim fw-7">
                Artificial intelligence is the simulation of human intelligence
                processes.
              </h2>
              <div className="poster mt-60 fade-top">
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image
                      src={poster}
                      className="w-100 parallax-image mh-300"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="row vertical-column-gap align-items-center pt-120 pb-120">
                <div className="col-12 col-lg-6">
                  <div className="c-details-content">
                    <h2 className="mt-8 fw-7 text-secondary title-anim mb-24">
                      Project
                    </h2>
                    <p className="cur-lg">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum
                      malesuada amet sagittis urna. Mattis eget ultricies est
                      morbi velit ultrices viverra elit facilisi. Amet est cras
                      euismod accumsan ornare sagittis ut integer. Sagittis sed
                      neque massa amet. Lorem vulputate nunc pulvinar maecenas
                      convallis augue. Magna massa viverra tincidunt vitae lacus
                      donec arcu consequat in. Maecenas dui nunc in convallis
                      vulputate vitae lectus eu lacus donec arcu consequat in.
                      Maecenas dui nunc in convallis vulputate vitae lectus eu.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1 fade-wrapper">
                  <div className="c-details-thumb fade-top">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={project}
                          className="w-100 parallax-image mh-260"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="road-map__content">
                    <h2 className="mt-8 fw-7 text-secondary title-anim mb-24">
                      Site Map
                    </h2>
                    <p className="cur-lg">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum
                      malesuada amet sagittis urna. Mattis eget ultricies est
                      morbi velit ultrices viverra elit facilisi. Amet est cras
                      euismod accumsan ornare sagittis ut integer. Sagittis sed
                      neque massa amet. Lorem vulputate nunc pulvinar maecenas
                      convallis augue. Magna massa viverra tincidunt vitae lacus
                      donec arcu consequat in. Maecenas dui nunc in convallis
                      vulputate vitae lectus eu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row vertical-column-gap mt-60 fade-wrapper">
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="c-details-thumb fade-top">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={nine}
                          className="w-100 mh-300 parallax-image"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="c-details-thumb fade-top">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={ten}
                          className="w-100 mh-300 parallax-image"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="c-details-thumb fade-top">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={eleven}
                          className="w-100 mh-300 parallax-image"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="c-details-thumb fade-top">
                    <div className="parallax-image-wrap">
                      <div className="parallax-image-inner">
                        <Image
                          src={twelve}
                          className="w-100 mh-300 parallax-image"
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

export default CaseSingle;
