"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryItems } from "@/public/data/gallery-items";

const ServiceGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  return (
    <section className="tp-gallery pt-120 pb-120 bg-black position-relative overflow-x-clip">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h2 className="mt-8 fw-7 text-white title-anim">Our Gallery</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-gallery-slider-wrapper mt-60">
              <div className="tp-gallery-slider-wrapper">
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
                  className="tp-gallery-slider"
                >
                  {galleryItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="tp-gallery__single">
                        <Image
                          src={item.src}
                          className="w-100 mh-300"
                          alt={item.alt}
                          onClick={() => openLightbox(index)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightboxIndex !== -1 && (
        <Lightbox
          index={lightboxIndex}
          slides={galleryItems.map((item) => ({
            src: item.src.src,
          }))}
          open={lightboxIndex >= 0}
          close={closeLightbox}
        />
      )}
    </section>
  );
};

export default ServiceGallery;
