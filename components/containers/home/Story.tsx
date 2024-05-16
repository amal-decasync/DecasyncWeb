"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { storyData } from "@/public/data/story-data";

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setActiveImageIndex(index);
  };

  return (
    <section className="tp-story pt-120 pb-120 bg-black sticky-wrapper fade-wrapper">
      <div className="container">
        <div className="row vertical-column-gap-md">
          <div className="col-12 col-lg-5">
            <div className="tp-story__content sticky-item">
              <h2 className="mt-8 title-anim text-white fw-7">
                Success stories
              </h2>
              <div className="tp-story__items">
                {storyData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`tp-story__single fade-top ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <p className="fw-6 mt-8">
                        <Link href={`${item.path}`}>{item.destination}</Link>
                      </p>
                      <h5 className="fw-4 mt-12 mb-12 text-white">
                        {item.title}
                      </h5>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1 d-none d-lg-block">
            <div className="tp-story__thumbs sticky-item">
              {storyData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`tp-story-thumb ${
                      index === activeImageIndex ? "thumb-active" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      className="w-100 mh-300"
                      alt="Image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
