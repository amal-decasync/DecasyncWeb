"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import thumbOne from "@/public/images/service/thumb-one.png";
import thumbTwo from "@/public/images/service/thumb-two.png";
import serviceOne from "@/public/images/sample/service4.png";
import serviceTwo from "@/public/images/sample/service6.png";

const ServiceBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (document.querySelector(".service-banner")) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-banner",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".thumb-one", {
        opacity: 0.3,
        y: "-100%",
        zIndex: -1,
        duration: 2,
      });

      tl.to(
        ".thumb-two",
        {
          opacity: 0.3,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        },
        0
      );
    }
  }, []);

  return (
    <section className="service-banner bg-black fix-top pb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-banner__content text-center">
              <h2 className="mt-8 text-xxl text-white title-anim fw-7 mb-30">
                The end-to-end bespoke software development agency you need
              </h2>
              <p className="text-white cur-lg">
                Empower your business with sophisticated tech solutions by
                DecaSync. From ideation to implementation, with a team of experts
                right at your fingertips
              </p>
              <div className="mt-60 text-center">
                <Link href="services" className="alter-btn btn-anim">
                  Get
                  <i className="fa-solid fa-arrow-trend-up"></i>A Free Quote
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="social">

        <li>
          <Link href="https://in.linkedin.com/company/decasync-innovations-pvt-ltd" target="_blank" aria-label="share us on facebook">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>

        <li>
          <Link href="https://www.instagram.com/decasync_innovations/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/decasync.innovations" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://x.com/decasync" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.threads.net/@decasync_innovations" target="_blank">
            <i className="fa-brands fa-threads"></i>
          </Link>
        </li>
      </ul>
      <Link href="#scroll-to" className="scroll-to">
        Scroll
        <span className="arrow"></span>
      </Link>
      <div className="thumb-one">
        <Image src={serviceOne} alt="Image" />
      </div>
      <div className="thumb-two">
        <Image src={serviceTwo} alt="Image" />
      </div>
    </section>
  );
};

export default ServiceBanner;
