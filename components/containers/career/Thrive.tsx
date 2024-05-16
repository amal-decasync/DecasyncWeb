import Image from "next/image";
import time from "@/public/images/time.png";
import trans from "@/public/images/trans.png";
import support from "@/public/images/support.png";
import skill from "@/public/images/skill.png";

const Thrive = () => {
  return (
    <section className="thrive pt-120 pb-120 bg-black fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <h2 className="mt-8 fw-7 title-anim text-white">
                What lets us thrive together
              </h2>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap-lg mt-60">
          <div className="col-12 col-md-6 fade-top">
            <div className="thumb">
              <Image src={time} alt="Image" />
            </div>
            <div className="content mt-40">
              <h4 className="mt-8 title-anim fw-7 text-white mb-16">
                Flexible workday
              </h4>
              <p className="cur-lg text-quinary">
                Lorem ipsum dolor sit amet consectetur. Elit sit laoreet aliquam
                porttitor mattis vel feugiat eget. Nunc nunc nunc urna lorem.
                mattis vel feugiat eget.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 fade-top">
            <div className="thumb">
              <Image src={trans} alt="Image" />
            </div>
            <div className="content mt-40">
              <h4 className="mt-8 title-anim fw-7 text-white mb-16">
                Transparency
              </h4>
              <p className="cur-lg text-quinary">
                Lorem ipsum dolor sit amet consectetur. Elit sit laoreet aliquam
                porttitor mattis vel feugiat eget. Nunc nunc nunc urna lorem.
                mattis vel feugiat eget.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 fade-top">
            <div className="thumb">
              <Image src={support} alt="Image" />
            </div>
            <div className="content mt-40">
              <h4 className="mt-8 title-anim fw-7 text-white mb-16">Support</h4>
              <p className="cur-lg text-quinary">
                Lorem ipsum dolor sit amet consectetur. Elit sit laoreet aliquam
                porttitor mattis vel feugiat eget. Nunc nunc nunc urna lorem.
                mattis vel feugiat eget.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 fade-top">
            <div className="thumb">
              <Image src={skill} alt="Image" />
            </div>
            <div className="content mt-40">
              <h4 className="mt-8 title-anim fw-7 text-white mb-16">
                Growth Skill
              </h4>
              <p className="cur-lg text-quinary">
                Lorem ipsum dolor sit amet consectetur. Elit sit laoreet aliquam
                porttitor mattis vel feugiat eget. Nunc nunc nunc urna lorem.
                mattis vel feugiat eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thrive;
