"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FadeAnimations = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");
      fadeWrapperRefs.forEach((fadeWrapperRef) => {
        const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");
        const fadeItemsBottom = fadeWrapperRef.querySelectorAll(".fade-bottom");
        const fadeItemsLeft = fadeWrapperRef.querySelectorAll(".fade-left");
        const fadeItemsRight = fadeWrapperRef.querySelectorAll(".fade-right");

        // from top
        fadeItems.forEach((element, index) => {
          const delay = index * 0.15;
          gsap.set(element, {
            opacity: 0,
            y: 100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });

        // from bottom
        fadeItemsBottom.forEach((element, index) => {
          const delay = index * 0.15;
          gsap.set(element, {
            opacity: 0,
            y: -100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });

        // from left
        fadeItemsLeft.forEach((element, index) => {
          const delay = index * 0.15;
          gsap.set(element, {
            opacity: 0,
            x: 100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });

        // from right
        fadeItemsRight.forEach((element, index) => {
          const delay = index * 0.15;
          gsap.set(element, {
            opacity: 0,
            x: -100,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 0.5,
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: delay,
              });
            },
            once: true,
          });
        });
      });
    }
  }, []);
  return null;
};

export default FadeAnimations;
