"use client";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./animations/SmoothScroll"), {
  ssr: false,
});

const ParallaxImage = dynamic(() => import("./animations/ParallaxImage"), {
  ssr: false,
});

const FadeImageBottom = dynamic(() => import("./animations/FadeImageBottom"), {
  ssr: false,
});

const ButtonHoverAnimation = dynamic(
  () => import("./animations/ButtonHoverAnimation"),
  {
    ssr: false,
  }
);

const VanillaTiltHover = dynamic(
  () => import("./animations/VanillaTiltHover"),
  {
    ssr: false,
  }
);

const SplitTextAnimations = dynamic(
  () => import("./animations/SplitTextAnimations"),
  {
    ssr: false,
  }
);

const ScrollToElement = dynamic(() => import("./animations/ScrollToElement"), {
  ssr: false,
});

const AppearDown = dynamic(() => import("./animations/AppearDown"), {
  ssr: false,
});

const FadeAnimations = dynamic(() => import("./animations/FadeAnimations"), {
  ssr: false,
});

const InitAnimations = () => {
  return (
    <>
      <SmoothScroll />
      <ParallaxImage />
      <FadeImageBottom />
      <ButtonHoverAnimation />
      <VanillaTiltHover />
      <SplitTextAnimations />
      <ScrollToElement />
      <AppearDown />
      <FadeAnimations />
    </>
  );
};

export default InitAnimations;
