"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/sponsor/one.png";
import two from "@/public/images/sponsor/two.png";
import three from "@/public/images/sponsor/three.png";
import four from "@/public/images/sponsor/four.png";
import five from "@/public/images/sponsor/five.png";
import six from "@/public/images/sponsor/six.png";

const Sponsor = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about-us";

  return (
    <div
      className={"sponsor overflow-x-clip" + (isAbout ? " " : " pt-120 pb-120")}
    >
      <div className="sponsor__slider-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          centeredSlides={true}
          roundLengths={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1700: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="sponsor__slider"
        >
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={one} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={two} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={three} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={four} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={five} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={six} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={one} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={two} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={three} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={four} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={five} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsor__single text-center">
              <Image src={six} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsor;
