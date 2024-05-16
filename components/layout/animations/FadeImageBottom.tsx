"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FadeImageBottom = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceWidth = window.innerWidth;

    if (
      document.querySelectorAll(".fade-img").length > 0 &&
      deviceWidth >= 992
    ) {
      gsap.utils.toArray(".fade-img").forEach((el: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: "+=40%",
            scrub: 1,
            pin: false,
            invalidateOnRefresh: true,
          },
        });

        tl.to(el, {
          y: "120px",
          zIndex: "-1",
          duration: 1,
        });
      });
    }
  }, []);
  return null;
};

export default FadeImageBottom;
