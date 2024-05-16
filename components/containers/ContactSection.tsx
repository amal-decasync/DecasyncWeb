"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import thumb from "@/public/images/contact-thumb.png";

const ContactSection = () => {
  const pathname = usePathname();
  const isServiceSingle = pathname === "/service-single" || pathname ==="/about-us";
  return (
    <section
      className={
        "tp-contact pb-120 fade-wrapper" +
        (isServiceSingle ? " pt-120" : " fix-top")
      }
    >
      <div className="container">
        <div className="row vertical-column-gap-md justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="tp-contact__content">
              <h2 className="mt-8 fw-7 text-secondary title-anim">
                Let&apos;s talk about your project
              </h2>
              <div className="contact-form mt-60">
                <form action="#" method="post">
                  <div className="input-single">
                    <input
                      type="text"
                      name="contact-name"
                      id="contactName"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="email"
                      name="contact-email"
                      id="contactEmail"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      name="company-name"
                      id="companyName"
                      placeholder="Company"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <textarea
                      name="user-message"
                      id="userMessage"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mt-60">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-xl-1">
            <div className="tp-contact__thumb fade-img fade-top">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={thumb}
                    className="w-100 parallax-image"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
