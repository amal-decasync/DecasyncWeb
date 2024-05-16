import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";
import five from "@/public/images/overview/five.png";

const Overview = () => {
  return (
    <section
      className="tp-overview pt-120 pb-120 sticky-wrapper"
      id="scroll-to"
    >
      <div className="container">
        <div className="row vertical-column-gap-lg">
          <div className="col-12 col-lg-5">
            <div className="tp-overview__content sticky-item">
              <h2 className="fw-7 text-secondary title-anim mb-30 mt-8">
                Explore the Power Of Decasync!
              </h2>
              <p className="mt-8 cur-lg">
                Our Dedicated Team Specialize In Crafting Custom Software 
                Solutions That Synchronize Seamlessly With Your Vision And 
                Market Needs.From Conceptualization To Delivery,We Empower
                You To Attract Customers,Generate Revenue,And Captivate Investors.
              </p>
              <div className="mt-40">
                <Link href="services" className="btn-line text-uppercase">
                  DISCOVER OUR EXPERTISE
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="tp-overview__items sticky-item">
            <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={four} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">
                        Web Application Development
                      </Link>
                    </h4>
                    <p className="text-tertiary">
                      Elevate Your Online Presence With Cutting-Edge
                      Web Application Development Tailored For Your Bussiness.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={three} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">
                        Mobile Application Development
                      </Link>
                    </h4>
                    <p className="text-tertiary">
                      Redefine User Experiences With Innovative 
                      Mobile Application Development To Stay Ahead In The Digital Landscape
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={two} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Product Design</Link>
                    </h4>
                    <p className="text-tertiary">
                      Elevate Your Products With DecaSync&apos;s Innovative Design
                       Approach.From Conceptualization To Realization,We Sync 
                       Aesthetics With Functionality,Creating Products
                       That Stand Out In The Market.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={one} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Artificial Intelligence</Link>
                    </h4>
                    <p className="text-tertiary">
                      Unlock The Potential Of Artificial Intelligence With DecaSync.
                      Our AI Solutions Are Meticulously Crafted To Transform Data 
                      Into Actionable Insights,Driving Innovation And Efficiency.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={five} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Idea Evaluation</Link>
                    </h4>
                    <p className="text-tertiary">
                      Dive Into Idea Evaluation And Witness The
                     Transformation Of Your Concepts Into Revolutionary Solutions.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
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

export default Overview;
