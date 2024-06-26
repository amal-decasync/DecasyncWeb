"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/testimonial/avatar-one.png";
import two from "@/public/images/testimonial/avatar-two.png";
import three from "@/public/images/testimonial/avatar-three.png";
// import four from "@/public/images/testimonial/avatar-four.png";
// import five from "@/public/images/testimonial/avatar-five.png";
import six from "@/public/images/sample/avatar1.jpg";
import seven from "@/public/images/sample/avatar2.jpg";

const Testimonial = () => {
  const imageUrls = [
    { url: "images/sample/avatar1.jpg" },
    { url: "images/sample/avatar2.jpg" },
    { url: "images/sample/avatar1.jpg" },
    { url: "images/sample/avatar2.jpg" },
    { url: "images/sample/avatar1.jpg" },
  ];

  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  const pathname = usePathname();
  const isService = pathname === "/services";

  return (
    <section
      className={"pt-120 tp-testimonial" + (isService ? " pb-120" : " ")}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={
                "tp-testimonial-inner " +
                (isService ? " tp-testimonial-alt" : " pb-120")
              }
            >
              <h2 className="fw-7 text-secondary mt-8 title-anim">
                Client Testimonials
              </h2>
              <div className="tp-testimonial-slider-wrap mt-60">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  speed={1200}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="tp-testimonial-slider"
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".tp-testimonial-pagination",
                    renderBullet: function (index, className) {
                      return `<span class="${className}"><img src="${
                        imageUrls[index].url
                      }" alt="Dot ${index + 1}" /></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".prev-testimonial",
                    prevEl: ".next-testimonial",
                  }}
                  onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.realIndex + 1)
                  }
                >
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={six} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Mathew Peter</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CEO at BT Grey
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                         &quot;I Came To DecaSync Because Of Their Reputation In The
                          Software Development Space.When We Expanded The Project 
                          To Incorporate Blockchain Not Only Did They Not Flinch,
                          They Got More Enthused.They Have Been Stellar At Every 
                          Step Of The Way Working Towards Solutions That Worked 
                          Straight To The Heart Of The Idea On A Micro And Macro Sense.
                          I Have Already Recommended Them Many Times And I Will Continue To Do So.
                          The Members Of DecaSync Have Always Promtly Returned My Calls Or
                          Emails Irrespective Of The Time.I Have Found Them To Be Consistently Available And Committed To Addressing My Needs. &quot;
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={seven} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Aneesh Krishna</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CEO at Biscon Media
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        &quot;DecaSync Innovations proved to be an invaluable partner 
                          in our digital transformation journey. Their team demonstrated 
                          exceptional professionalism, delivering high-quality solutions 
                          that significantly contributed to our business growth. Their ability
                          to understand our unique challenges and provide tailored solutions sets them apart.
                          I highly recommend DecaSync for any technology-related projects. &quot;
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={six} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Shibu </h5>
                          <p className="text-xs text-tertiary mb-12">
                            CEO at 24 News
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        &quot;Our experience with DecaSync has been exceptional.
                        They demonstrated deep technical knowledge and a keen 
                        understanding of our business objectives. The collaboration
                        was seamless, and they consistently delivered results beyond
                        our expectations. Their commitment to excellence and client 
                        satisfaction is commendable. We look forward to future collaborations with the DecaSync team. &quot;
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={four} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Mathew Peter</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CEO At BT Grey
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        &quot;I Came To DecaSync Because Of Their Reputation In The
                          Software Development Space.When We Expanded The Project 
                          To Incorporate Blockchain Not Only Did They Not Flinch,
                          They Got More Enthused.They Have Been Stellar At Every 
                          Step Of The Way Working Towards Solutions That Worked 
                          Straight To The Heart Of The Idea On A Micro And Macro Sense.
                          I Have Already Recommended Them Many Times And I Will Continue To Do So.
                          The Members Of DecaSync Have Always Promtly Returned My Calls Or
                           Emails Irrespective Of The Time.I Have Found Them To Be Consistently Available And Committed To Addressing My Needs. &quot;
                      </blockquote>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tp-testimonial-single">
                      <div className="tp-testimonial__meta">
                        <div className="thumb">
                          <Image src={five} alt="Image" />
                        </div>
                        <div className="content">
                          <h5 className="fw-5 text-secondary mt-8">Mathew Peter</h5>
                          <p className="text-xs text-tertiary mb-12">
                            CEO At BT Grey
                          </p>
                          <button className="review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </button>
                        </div>
                      </div>
                      <blockquote className="text-xl cur-lg mt-40">
                        &quot;I Came To DecaSync Because Of Their Reputation In The
                          Software Development Space.When We Expanded The Project 
                          To Incorporate Blockchain Not Only Did They Not Flinch,
                          They Got More Enthused.They Have Been Stellar At Every 
                          Step Of The Way Working Towards Solutions That Worked 
                          Straight To The Heart Of The Idea On A Micro And Macro Sense.
                          I Have Already Recommended Them Many Times And I Will Continue To Do So.
                          The Members Of DecaSync Have Always Promtly Returned My Calls Or
                           Emails Irrespective Of The Time.I Have Found Them To Be Consistently Available And Committed To Addressing My Needs. &quot;
                      </blockquote>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
              <div className="tp-testimonial-arrow">
                <button
                  className="prev-testimonial"
                  aria-label="previous testimonial"
                >
                  <span className="material-symbols-outlined">west</span>
                </button>
                <span className="current-slide">{currentSlide}</span>
                <span className="divider"></span>
                <span className="total-slide">{totalSlides}</span>
                <button
                  className="next-testimonial"
                  aria-label="next testimonial"
                >
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
              <div className="tp-testimonial-pagination mt-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
