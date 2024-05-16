import Image from "next/image";
import Link from "next/link";
import poster from "@/public/images/blog/blog-poster.png";
import info from "@/public/images/blog/blog-info.png";

const BlogSingle = () => {
  return (
    <section className="tp-post-details fix-top pb-120 fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-post-intro">
              <h2 className="title-anim text-xxl fw-7 text-secondary mt-8">
                Tackling data of annotation problems in healthcare
              </h2>
              <div className="mt-60 mb-24 d-flex align-items-center justify-content-between tppr">
                <div className="d-flex align-items-center tp-post-tags-container mt-8">
                  <p className="text-xs">Scope:</p>
                  <div className="d-flex align-items-center tp-post-tags">
                    <Link href="blog">AI</Link>
                    <span></span>
                    <Link href="blog">Artificial Intelligence</Link>
                    <span></span>
                    <Link href="blog">Data Science</Link>
                    <span></span>
                    <Link href="blog">Machine Learning</Link>
                  </div>
                </div>
                <div className="tp-post-meta mt-8">
                  <p className="author text-xs text-tertiary">Denial Lio</p>
                  <span></span>
                  <p className="date text-xs text-tertiary">18 Dec 2022</p>
                </div>
              </div>
              <div className="tp-post-poster fade-top">
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image
                      src={poster}
                      className="w-100 mh-300 parallax-image"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="group mt-60">
                <p className="cur-lg mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec tortor id erat faucibus tempor id eget turpis. Donec
                  lobortis et neque eget congue. Mauris laoreet orci ac dictum
                  interdum. Sed dapibus convallis arcu, a aliquam purus sodales
                  nec. Integer consequat et magna sit amet porta. Maecenas
                  consectetur eros sed risus porta convallis eget et massa.
                  Integer auctor convallis ligula, sit amet sollicitudin justo
                  tincidunt a. Sed tellus diam.
                </p>
                <p className="cur-lg mb-24 fw-6">
                  Bibendum tincidunt orci vel, sollicitudin bibendum ligula.
                  Pellentesque sollicitudin nulla felis, a ornare tellus
                  tristique ac. Proin ultricies a turpis sit amet lacinia. Ut
                  laoreet nunc leo, ac congue enim laoreet in. Aenean suscipit
                  arcu at ligula tempor porta.
                </p>
                <p className="cur-lg">
                  Quisque et fringilla lacus, quis luctus elit. Curabitur eu dui
                  mattis turpis commodo eleifend. Sed porta ornare nunc et
                  tristique. Curabitur vel eros a ante cursus lacinia. Nam nisl
                  leo, aliquet a placerat at, porttitor quis augue. Proin quis
                  aliquet libero. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas. Vestibulum
                  varius a ipsum ornare blandit. Integer vitae eleifend risus,
                  id tincidunt elit. Integer tincidunt ipsum vitae sagittis
                  porta. Aenean ut facilisis dui. Praesent at ultricies purus.
                  Nam a arcu vel diam ullamcorper tincidunt. Curabitur
                  vestibulum commodo erat non laoreet. Proin nibh nibh,
                  scelerisque a nibh nec, scelerisque convallis leo. Nunc eget
                  elit nunc.
                </p>
              </div>
              <div className="group-info mt-60">
                <div className="row align-items-center vertical-column-gap">
                  <div className="col-12 col-lg-6">
                    <div className="fade-top">
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={info}
                            className="w-100 mh-300 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <p className="cur-lg mb-24">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec nec tortor id erat faucibus tempor id eget turpis.
                      Donec lobortis et neque eget congue. Mauris laoreet orci
                      ac dictum interdum. Sed dapibus convallis arcu, a aliquam
                      purus sodales nec.
                    </p>
                    <p className="cur-lg">
                      Quisque et fringilla lacus, quis luctus elit. Curabitur eu
                      dui mattis turpis commodo eleifend. Sed porta ornare nunc
                      et tristique. Curabitur vel eros a ante cursus lacinia.
                      Nam nisl leo, aliquet a placerat at, porttitor quis augue.
                      Proin quis aliquet libero. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Vestibulum varius a ipsum ornare blandit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 fw-7 text-secondary title-anim mb-24">
                  The Hidden Markov Model&apos;s Limitations
                </h4>
                <p className="cur-lg mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec tortor id erat faucibus tempor id eget turpis. Donec
                  lobortis et neque eget congue. Mauris laoreet orci ac dictum
                  interdum. Sed dapibus convallis arcu, a aliquam purus sodales
                  nec.
                </p>
                <p className="cur-lg">
                  Quisque et fringilla lacus, quis luctus elit. Curabitur eu dui
                  mattis turpis commodo eleifend. Sed porta ornare nunc et
                  tristique. Curabitur vel eros a ante cursus lacinia. Nam nisl
                  leo, aliquet a placerat at, porttitor quis augue. Proin quis
                  aliquet libero. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas. Vestibulum
                  varius a ipsum ornare blandit.
                </p>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 fw-7 text-secondary title-anim mb-24">
                  The Effect
                </h4>
                <p className="cur-lg mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec tortor id erat faucibus tempor id eget turpis. Donec
                  lobortis et neque eget congue. Mauris laoreet orci ac dictum
                  interdum. Sed dapibus convallis arcu, a aliquam purus sodales
                  nec.
                </p>
                <p className="cur-lg">
                  Quisque et fringilla lacus, quis luctus elit. Curabitur eu dui
                  mattis turpis commodo eleifend. Sed porta ornare nunc et
                  tristique. Curabitur vel eros a ante cursus lacinia. Nam nisl
                  leo, aliquet a placerat at, porttitor quis augue. Proin quis
                  aliquet libero. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas. Vestibulum
                  varius a ipsum ornare blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-12">
            <div className="bd-social">
              <p className="fw-5 text-uppercase">Share :</p>
              <ul className=" social">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
