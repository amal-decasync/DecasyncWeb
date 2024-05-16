"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import thumb from "@/public/images/transform-thumb.png";
import teamThumb from "@/public/images/team-thumb.png";

const Transform = () => {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".foot-fade", {
      x: -100,
      opacity: 0,
    });

    ScrollTrigger.batch(".foot-fade", {
      start: "-100px bottom",
      onEnter: (elements) =>
        gsap.to(elements, {
          x: 0,
          opacity: 1,
          stagger: 0.3,
        }),
    });
  }, []);

  return (
    <section className="transform pt-120 pb-120 " id="scroll-to">
      <div className="container">
        <div className="row vertical-column-gap pb-120 fade-wrapper">
          <div className="col-12 col-lg-6">
            <div className="transform__content">
              <h2 className="mt-8 title-anim text-secondary mb-24 fw-7">
                Transform your business using Artificial Intelligence services.
              </h2>
              <p className="cur-lg">
                Lorem ipsum dolor sit amet consectetur. Ac cursus aliquet mi
                egestas faucibus et scelerisque. Tristique id vel at in in.
                Viverra auctor feugiat vel orci volutpat quis eget nec.
              </p>
              <div className="anime d-none d-lg-flex mt-40">
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
                <span className="foot-fade"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="transform__thumb fade-top fade-img">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={thumb}
                    className="w-100 parallax-image mh-300"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="transform-inner pt-120 pb-120">
              <h4 className="mt-8 title-anim text-secondary fw-7">
                See our artificial intelligence solutions
              </h4>
              <div className="transform-slider-wrapper mt-60">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  slidesPerGroup={1}
                  freeMode={true}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="transform-slider"
                >
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Boost income
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod at
                        posuere nam sceleris.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Reduce Costs
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod at
                        posuere nam sceleris.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Find new clients and customers
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Auto mate workflows
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Maximize productivity
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Boost income
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod at
                        posuere nam sceleris.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Reduce Costs
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod at
                        posuere nam sceleris.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Find new clients and customers
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Auto mate workflows
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="transform-single">
                      <h5 className="mt-8 text-secondary mb-30">
                        Maximize productivity
                      </h5>
                      <p className="cur-lg">
                        Lorem ipsum dolor sit amet consectetur. Aliquet urna
                        diam egestas et. Porttitor congue aenean euismod.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap pt-120">
          <div className="col-12 col-lg-6">
            <div className="team__content">
              <h4 className="mt-8 title-anim text-secondary fw-7">
                Why you should choose us?
              </h4>
              <div className="team-slider-wrapper mt-60">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="team-slider"
                  navigation={{
                    nextEl: ".prev-team",
                    prevEl: ".next-team",
                  }}
                  onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.realIndex + 1)
                  }
                >
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Quisque varius malesuada dui, ut posuere purus gravida
                        in. Phasellus ultricies ullamcorper mollis. Pellentesque
                        varius lectus in massa placerat cursus. Donec in dictum
                        nisl. In maximus posuere leo nec porttitor.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Quisque varius malesuada dui, ut posuere purus gravida
                        in. Phasellus ultricies ullamcorper mollis. Pellentesque
                        varius lectus in massa placerat cursus. Donec in dictum
                        nisl. In maximus posuere leo nec porttitor.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Quisque varius malesuada dui, ut posuere purus gravida
                        in. Phasellus ultricies ullamcorper mollis. Pellentesque
                        varius lectus in massa placerat cursus. Donec in dictum
                        nisl. In maximus posuere leo nec porttitor.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Quisque varius malesuada dui, ut posuere purus gravida
                        in. Phasellus ultricies ullamcorper mollis. Pellentesque
                        varius lectus in massa placerat cursus. Donec in dictum
                        nisl. In maximus posuere leo nec porttitor.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-single">
                      <h4 className="mt-8 text-secondary mb-24">Expert Team</h4>
                      <p className="cur-lg">
                        Quisque varius malesuada dui, ut posuere purus gravida
                        in. Phasellus ultricies ullamcorper mollis. Pellentesque
                        varius lectus in massa placerat cursus. Donec in dictum
                        nisl. In maximus posuere leo nec porttitor.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="tp-team-arrow mt-60">
                <button className="prev-team" aria-label="previous team">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <span className="current-slide-t">{currentSlide}</span>
                <span className="divider"></span>
                <span className="total-slide-t">{totalSlides}</span>
                <button className="next-team" aria-label="next team">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="team__thumb text-start text-lg-end">
              <Image src={teamThumb} className="mh-300" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
