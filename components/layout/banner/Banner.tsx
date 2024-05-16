"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import hand from "@/public/images/banner/hand.png";
import avatarOne from "@/public/images/banner/avatar-one.png";
import avatarTwo from "@/public/images/banner/avatar-two.png";
import avatarThree from "@/public/images/banner/avatar-three.png";
import thumb from "@/public/images/banner/thumb.png";
import videoFrame from "@/public/images/video-frame.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        className="tp-banner fix-top pb-120"
        data-background="assets/images/banner/banner-bg.png"
      >
        <div className="container">
          <div className="row vertical-column-gap align-items-center">
            <div className="col-12 col-md-9 col-lg-9">
              <div className="tp-banner__content">
                <h1 className="mt-8 text-white fw-7 title-anim">
                  Syncing Innovations <Image src={hand} alt="Image" /> with{" "}
                  <span className="text-quaternary">DecaSync</span>
                </h1>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="text-start text-lg-end">
                <Link href="services" className="alter-btn btn-anim">
                  Explore
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  Our Services
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="row vertical-column-gap mt-60">
            <div className="col-12 col-lg-4 col-xxl-3 order-last order-lg-first">
              <div className="tp-banner__users h-100">
                <div className="tp-banner__avatar mb-24">
                  <Image src={avatarOne} alt="Image" />
                  <Image src={avatarTwo} alt="Image" />
                  <Image src={avatarThree} alt="Image" />
                </div>
                <h5 className="fw-5 text-white mt-8 mb-8">
                  240 Business Peoples
                </h5>
                <p className="text-white">Already registered</p>
              </div>
            </div>
            <div className="col-12 col-lg-8 col-xxl-9">
              <div className="tp-banner__thumb">
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image
                      src={thumb}
                      className="w-100 mh-400 parallax-image"
                      alt="Image"
                    />
                  </div>
                </div>
                <button
                  className="video-frame video-btn"
                  aria-label="open video"
                  onClick={() => setOpen(true)}
                >
                  <Image src={videoFrame} alt="Image" />
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <ul className="social">
          <li>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
        </ul>
        <Link href="#scroll-to" className="scroll-to">
          Scroll
          <span className="arrow"></span>
        </Link>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="RvreULjnzFo"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Banner;
