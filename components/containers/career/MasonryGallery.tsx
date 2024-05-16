import Image from "next/image";
import one from "@/public/images/masonry/one.png";
import two from "@/public/images/masonry/two.png";
import three from "@/public/images/masonry/three.png";
import four from "@/public/images/masonry/four.png";
import five from "@/public/images/masonry/five.png";
import six from "@/public/images/masonry/six.png";
import seven from "@/public/images/masonry/seven.png";

const MasonryGallery = () => {
  return (
    <div className="mason pt-120 pb-120 fade-wrapper">
      <div className="container">
        <div className="row vertical-column-gap">
          <div className="col-12 col-md-3">
            <div className="mason-single fade-top">
              <Image src={one} className="mh-260" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="mason-single fade-bottom">
              <Image src={two} className="mh-260" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="mason-single fade-left">
              <Image src={three} className="mh-260 botter" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="mason-single fade-right">
              <Image src={seven} className="mh-260 botter" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="mason-single fade-top">
              <Image src={five} className="mh-260" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="mason-single fade-bottom">
              <Image src={six} className="mh-260" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="mason-single toper fade-right">
              <Image src={four} className="mh-260" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
