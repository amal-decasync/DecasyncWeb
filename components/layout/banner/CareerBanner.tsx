"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/banner/cp-thumb.png";

const CareerBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (document.querySelector(".career-banner")) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".career-banner",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".cp-banner-thumb", {
        opacity: 0.1,
        y: "40%",
        duration: 2,
      });

      tl.to(
        ".career-banner",
        {
          "--scale": 3,
          duration: 2,
        },
        0
      );
    }
  }, []);

  return (
    <section className="career-banner fix-top bg-black position-relative overflow-hidden">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-11">
            <div className="row align-items-center">
              <div className="col-12 col-sm-11 col-md-10 col-xl-8 col-xxl-9">
                <div className="cp-banner__content">
                  <h2 className="mt-8 fw-7 text-xxl title-anim text-white">
                    Grow your career the way you feel
                  </h2>
                </div>
              </div>
              <div className="col-12 col-sm-1 col-md-2 col-xl-4 col-xxl-3">
                <div className="cp-banner-thumb dir-rtl">
                  <Image src={thumb} className="mh-300 unset" alt="Image" />
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
      <Link href="#scroll-to" className="scroll-to">
        Scroll
        <span className="arrow"></span>
      </Link>
      <span className="sm-c"></span>
      <span className="sm-c sm-cl"></span>
    </section>
  );
};

export default CareerBanner;
