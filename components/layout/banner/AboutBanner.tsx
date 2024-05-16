"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import thumb from "@/public/images/banner/banner-two-thumb.png";

const AboutBanner = () => {
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
    <section className="about-banner fix-top pb-120 position-relative overflow-x-clip">
      <div className="container">
        <div className="row vertical-column-gap">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="about-banner__content">
              <h2 className="text-xxl title-anim fw-7 text-secondary mt-8 mb-30">
                We are your innovation and growth partner
              </h2>
              <p className="cur-lg">
                We support the growth of startups and innovators by applying the
                best fitted technologies and sharing our expertise. We strive to
                improve people&apos;s lives through cutting-edge products and
                solutions.
              </p>
              <div className="mt-60 foot-group">
                <div className="anime d-none d-sm-flex">
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                </div>
                <Link
                  href="services"
                  className="alter-btn btn-anim btn-anim-light"
                >
                  Explore
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  Our Services
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-xxl-1">
            <div className="about-banner__thumb">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={thumb}
                    className="unset parallax-image mh-300"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default AboutBanner;
