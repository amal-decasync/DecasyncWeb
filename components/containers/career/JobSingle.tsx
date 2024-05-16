import Link from "next/link";

const JobSingle = () => {
  return (
    <section className="job-single fix-top pb-120 sticky-wrapper">
      <div className="container">
        <div className="row vertical-column-gap">
          <div className="col-12 col-lg-7">
            <div className="j-d-content sticky-item">
              <div className="intro">
                <h2 className="mt-8 text-secondary fw-7 title-anim mb-24">
                  UI/UX Design
                </h2>
                <p>
                  Position: <span className="position mb-12">(02)</span>
                </p>
                <p>
                  Location: <span className="location">(Remote)</span>
                </p>
              </div>
              <div className="group pt-120">
                <h4 className="mt-8 text-secondary title-anim fw-6 mb-24">
                  Who we are
                </h4>
                <p className="cur-lg">
                  Lorem ipsum dolor sit amet consectetur. Augue morbi sapien
                  malesuada augue massa vivamus pharetra. Pellentesque velit
                  lectus dui convallis posuere viverra enim mauris. Pulvinar
                  quam vitae ut viverra. Vitae quis cursus magna sit amet neque
                  ultricies lectus massa. Sem mauris tincidunt risus enim
                  adipiscing viverra. Interdum lectus interdum diam ultricies
                  molestie. In et ullamcorper semper odio enim.
                </p>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 text-secondary title-anim fw-6 mb-24">
                  What you want
                </h4>
                <ul>
                  <li>
                    you have at least three years of commercial experience
                  </li>
                  <li>
                    you have a strong web/UI portfolio including published
                    projects
                  </li>
                  <li>fluent English in verbal and written communication</li>
                  <li>
                    you are passionate about user interface and web design
                  </li>
                  <li>issues are challenges not show-stoppers for you</li>
                  <li>you are a trend seeker</li>
                  <li>you bring a lot of attention to details</li>
                  <li>
                    you plan upfront, think ahead, and are ready to be surprised
                  </li>
                  <li>you think about the full picture</li>
                  <li>
                    you are familiar with any UI design tool, i.e., Sketch,
                    Figma or Adobe XD
                  </li>
                </ul>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 text-secondary title-anim fw-6 mb-24">
                  Who we are
                </h4>
                <p className="cur-lg">
                  Lorem ipsum dolor sit amet consectetur. Augue morbi sapien
                  malesuada augue massa vivamus pharetra. Pellentesque velit
                  lectus dui convallis posuere viverra enim mauris. Pulvinar
                  quam vitae ut viverra. Vitae quis cursus magna sit amet neque
                  ultricies lectus massa. Sem mauris tincidunt risus enim
                  adipiscing viverra. Interdum lectus interdum diam ultricies
                  molestie. In et ullamcorper semper odio enim.
                </p>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 text-secondary title-anim fw-6 mb-24">
                  Bonus points
                </h4>
                <ul>
                  <li>you have at least three years</li>
                  <li>you have a strong web/UI portfolio including</li>
                  <li>fluent English in verbal</li>
                  <li>you are passionate about user interface</li>
                  <li>issues are challenges</li>
                  <li>you are a seeker</li>
                </ul>
              </div>
              <div className="group mt-60">
                <h4 className="mt-8 text-secondary title-anim fw-6 mb-24">
                  What you get is what you see
                </h4>
                <ul>
                  <li>you have at least three years</li>
                  <li>you have a strong web/UI portfolio including</li>
                  <li>fluent English in verbal</li>
                  <li>you are passionate about user interface</li>
                  <li>issues are challenges</li>
                  <li>you are a seeker</li>
                  <li>fluent English in verbal and written communication</li>
                  <li>
                    you are passionate about user interface and web design
                  </li>
                  <li>issues are challenges not show-stoppers for you</li>
                  <li>you are a trend seeker</li>
                  <li>you bring a lot of attention to details</li>
                  <li>
                    you plan upfront, think ahead, and are ready to be surprised
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1">
            <div className="j-d-sidebar sticky-item">
              <div className="intro">
                <span className="text-uppercase mt-8 text-tertiary mb-16">
                  JOIN US
                </span>
                <h4 className="mt-8 fw-5 title-anim text-secondary mb-16">
                  UI/UX Design
                </h4>
                <p>Full-time (40hr per week)</p>
              </div>
              <div className="content mt-40">
                <p className="mt-8 fw-5 text-xl text-secondary mb-16">
                  Salary-
                </p>
                <p className="mt-8 fw-5 text-xl text-secondary mb-16">
                  $1500-$2000 per month
                </p>
                <p className="mt-8 fw-4 text-tertiary mb-30">
                  + VAT (B2B) + bonuses
                </p>
                <p className="mt-8 fw-4 text-tertiary mb-16">Remote / Poznań</p>
                <p className="mt-8 fw-4 text-tertiary">Start: ASAP</p>
              </div>
              <div className="cta mt-60">
                <Link href="/" className="btn">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSingle;
