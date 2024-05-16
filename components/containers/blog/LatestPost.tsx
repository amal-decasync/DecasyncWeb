"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/blog/related-one.png";
import two from "@/public/images/blog/related-two.png";
import three from "@/public/images/blog/related-three.png";
import four from "@/public/images/blog/related-four.png";

const LatestPost = () => {
  return (
    <section className="tp-latest-post pt-120 pb-120 bg-quinary">
      <div className="container">
        <div className="row vertical-column-gap align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tp-lp-title text-center text-lg-start">
              <h2 className="mt-8 fw-7 text-secondary title-anim">
                Related posts
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="tp-lp-cta text-center text-lg-end">
              <Link href="blog" className="btn-line text-uppercase">
                See All Posts
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-lp-slider-wrapper mt-60">
              <div className="tp-lp-slider-wrapper">
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
                  className="tp-lp-slider"
                >
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={one}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={two}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={three}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-lp-slider__single topy-tilt">
                      <div className="thumb mb-24">
                        <Link
                          href="blog-single"
                          className="w-100 overflow-hidden"
                        >
                          <Image
                            src={four}
                            className="w-100 mh-220"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="tp-lp-post__meta mb-24 mt-8">
                          <p className="author text-xs text-tertiary">
                            Denial Lio
                          </p>
                          <span></span>
                          <p className="date text-xs text-tertiary">
                            18 Dec 2022
                          </p>
                        </div>
                        <h5 className="mt-8 fw-5 text-secondary">
                          <Link href="blog-single">
                            Tackling data of annotation problems in healthcare
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
