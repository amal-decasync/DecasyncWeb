"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/case/one.png";
import two from "@/public/images/case/two.png";
import three from "@/public/images/case/three.png";
import four from "@/public/images/case/four.png";
import five from "@/public/images/case/five.png";
import six from "@/public/images/case/six.png";
import seven from "@/public/images/case/seven.png";
import eight from "@/public/images/case/eight.png";
import thirteen from "@/public/images/case/thirteen.png";
import fourteen from "@/public/images/case/fourteen.png";
import fifteen from "@/public/images/case/fifteen.png";
import sixteen from "@/public/images/case/sixteen.png";

const CaseItems = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="fix-top pb-120 c-study">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="c-study-banner pb-120">
              <div className="row">
                <div className="col-12 col-lg-9">
                  <h2 className="mt-8 title-anim fw-7 text-secondary mb-24">
                    Case Studies
                  </h2>
                  <p className="cur-lg">
                    Lorem ipsum dolor sit amet consectetur. Morbi in non nibh
                    netus tortor. Non vitae ut consectetur sit quam egestas
                    praesent. Enim augue cras donec sed pellentesque tortor
                    maecenas. Tellus duis sit justo neque. Est elit diam quam
                    venenatis sit morbi sed dignissim eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="c-study-inner pt-120 mb-60">
              <div className="c-study-btns">
                <button
                  className={`study-btn ${
                    activeTabIndex === 0 ? "study-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                >
                  Case Study
                </button>
                <span></span>
                <button
                  className={`study-btn ${
                    activeTabIndex === 1 ? "study-btn-active" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  Client
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="c-content-wrapper mt-60">
              <div
                className={`c-tab-single ${
                  activeTabIndex === 0 ? "active-tab" : ""
                }`}
              >
                <div className="row vertical-column-gap-lg">
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={two}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          3D Render
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            3D computer graphics, or “3D graphics.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={one}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          3D Render
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            Artificial intelligence is the simulation of human
                            processes.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={three}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          UI / UX
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            User experience (UX) design is the process design
                            teams.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={four}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          Photography
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            Photography is the art, application, and practice.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={five}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          UI / UX
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            UX case study for a medical app- medical product
                            design.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={six}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          Icon Set
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            Make icon set for the educational project.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={seven}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          AI
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            User experience (UX) design is the process design
                            teams.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="c-study-single">
                      <div className="thumb mb-24">
                        <Link href="case-study-single" className="w-100">
                          <Image
                            src={eight}
                            className="w-100 mh-300 "
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link href="case-study" className="mb-30 fw-6">
                          Road Map
                        </Link>
                        <h4 className="fw-6 mt-8 text-secondary">
                          <Link href="case-study-single">
                            UX site rode map app product design system
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`c-tab-single ${
                  activeTabIndex === 1 ? "active-tab" : ""
                }`}
              >
                <div className="row vertical-column-gap-lg">
                  <div className="col-12">
                    <div className="row vertical-column-gap-md align-items-center">
                      <div className="col-12 col-lg-6">
                        <div className="c-tab__client">
                          <h2 className="mt-8 fw-7 title-anim text-secondary mb-24">
                            Tarapio
                          </h2>
                          <p className="cur-lg">
                            Lorem ipsum dolor sit amet consectetur. Pharetra sit
                            amet est tellus nibh sit lacus in duis. Condimentum
                            tellus sit pharetra consectetur magna massa. In odio
                            leo pellentesque aenean egestas est risus etiam.
                            Quam in nunc consectetur blandit id.
                          </p>
                          <div className="mt-40">
                            <Link
                              href="case-study-single"
                              className="btn-anim btn-anim-light"
                            >
                              Read More
                              <i className="fa-solid fa-arrow-trend-up"></i>
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
                        <div className="c-tab__thumb">
                          <Image
                            src={thirteen}
                            className="w-100 mh-300"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row vertical-column-gap-md align-items-center">
                      <div className="col-12 col-lg-6 col-xxl-5">
                        <div className="c-tab__thumb">
                          <Image
                            src={fourteen}
                            className="w-100 mh-300"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 offset-xxl-1">
                        <div className="c-tab__client">
                          <h2 className="mt-8 fw-7 title-anim text-secondary mb-24">
                            Melenpo
                          </h2>
                          <p className="cur-lg">
                            Lorem ipsum dolor sit amet consectetur. Pharetra sit
                            amet est tellus nibh sit lacus in duis. Condimentum
                            tellus sit pharetra consectetur magna massa. In odio
                            leo pellentesque aenean egestas est risus etiam.
                            Quam in nunc consectetur blandit id.
                          </p>
                          <div className="mt-40">
                            <Link
                              href="case-study-single"
                              className="btn-anim btn-anim-light"
                            >
                              Read More
                              <i className="fa-solid fa-arrow-trend-up"></i>
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row vertical-column-gap-md align-items-center">
                      <div className="col-12 col-lg-6">
                        <div className="c-tab__client">
                          <h2 className="mt-8 fw-7 title-anim text-secondary mb-24">
                            Polax
                          </h2>
                          <p className="cur-lg">
                            Lorem ipsum dolor sit amet consectetur. Pharetra sit
                            amet est tellus nibh sit lacus in duis. Condimentum
                            tellus sit pharetra consectetur magna massa. In odio
                            leo pellentesque aenean egestas est risus etiam.
                            Quam in nunc consectetur blandit id.
                          </p>
                          <div className="mt-40">
                            <Link
                              href="case-study-single"
                              className="btn-anim btn-anim-light"
                            >
                              Read More
                              <i className="fa-solid fa-arrow-trend-up"></i>
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
                        <div className="c-tab__thumb">
                          <Image
                            src={fifteen}
                            className="w-100 mh-300"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row vertical-column-gap-md align-items-center">
                      <div className="col-12 col-lg-6 col-xxl-5">
                        <div className="c-tab__thumb">
                          <Image
                            src={sixteen}
                            className="w-100 mh-300"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 offset-xxl-1">
                        <div className="c-tab__client">
                          <h2 className="mt-8 fw-7 title-anim text-secondary mb-24">
                            AINA
                          </h2>
                          <p className="cur-lg">
                            Lorem ipsum dolor sit amet consectetur. Pharetra sit
                            amet est tellus nibh sit lacus in duis. Condimentum
                            tellus sit pharetra consectetur magna massa. In odio
                            leo pellentesque aenean egestas est risus etiam.
                            Quam in nunc consectetur blandit id.
                          </p>
                          <div className="mt-40">
                            <Link
                              href="case-study-single"
                              className="btn-anim btn-anim-light"
                            >
                              Read More
                              <i className="fa-solid fa-arrow-trend-up"></i>
                              <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseItems;
