"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Counter from "../Counter";
import one from "@/public/images/study/one.png";
import two from "@/public/images/study/two.png";
import three from "@/public/images/study/three.png";
import four from "@/public/images/study/four.png";
import five from "@/public/images/study/five.png";

const AboutCase = () => {
  return (
    <section className="tp-study pt-120 pb-120 bg-quinary">
      <div className="container">
        <div className="row vertical-column-gap align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tp-lp-title text-center text-lg-start">
              <h2 className="mt-8 fw-7 text-secondary title-anim">
                Case Studies
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="tp-study-arrows d-flex justify-content-center justify-content-lg-end">
              <button className="prev-study" aria-label="previous study">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="next-study" aria-label="next study">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-study-slider-wrapper">
              <div className="tp-study-slider-wrap">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  slidesPerGroup={1}
                  freeMode={true}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="tp-study-slider"
                  navigation={{
                    nextEl: ".prev-study",
                    prevEl: ".next-study",
                  }}
                >
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={one}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={two}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={three}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={four}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={five}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={one}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={two}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={three}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={four}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-study-slider__single">
                      <div className="thumb">
                        <Link href="case-study-single">
                          <Image
                            src={five}
                            className="w-100 mh-400"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content text-center">
                        <h5 className="mt-8 mb-12 text-white fw-5 text-uppercase">
                          <Link href="case-study-single">MOON FALO</Link>
                        </h5>
                        <Link href="case-study-single" className="btn-angle">
                          View
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-120 vertical-column-gap-lg">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="counter__single text-center">
              <h2 className="fw-5 text-secondary mt-8 mb-16">
                <span className="odometer">
                  <Counter value={45} />
                </span>
                <span>k</span>
              </h2>

              <p className="text-tertiary">Projects Completed</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="counter__single text-center">
              <h2 className="fw-5 text-secondary mt-8 mb-16">
                <span className="odometer">
                  <Counter value={25} />
                </span>
                <span>k</span>
              </h2>
              <p className="text-tertiary">Happy Clients</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="counter__single text-center">
              <h2 className="fw-5 text-secondary mt-8 mb-16">
                <span className="odometer">
                  <Counter value={12} />
                </span>
                <span>+</span>
              </h2>
              <p className="text-tertiary">Years Of Exprience</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="counter__single text-center border-0">
              <h2 className="fw-5 text-secondary mt-8 mb-16">
                <span className="odometer">
                  <Counter value={70} />
                </span>
                <span>+</span>
              </h2>
              <p className="text-tertiary">Awards achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCase;
