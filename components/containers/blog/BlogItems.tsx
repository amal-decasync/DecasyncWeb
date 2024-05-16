import Link from "next/link";
import PostFilterItems from "./post-filter/PostFilterItems";

const BlogItems = () => {
  return (
    <section className="fix-top pb-120 blog-m">
      <div className="container">
        <div className="row align-items-center vertical-column-gap">
          <div className="col-12 col-lg-7">
            <h2 className="mt-8 fw-7 text-secondary title-anim">Blog</h2>
          </div>
          <div className="col-12 col-lg-5">
            <form action="#" method="post" autoComplete="off">
              <div className="search-form">
                <input
                  type="search"
                  name="search-post"
                  id="searchPost"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  aria-label="search post"
                  title="search post"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <PostFilterItems />
        <div className="row mt-60">
          <div className="col-12">
            <div className="section__cta">
              <ul className="pagination">
                <li>
                  <button>
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>
                <li>
                  <Link href="blog">1</Link>
                </li>
                <li>
                  <Link href="blog" className="active">
                    2
                  </Link>
                </li>
                <li>
                  <Link href="blog">3</Link>
                </li>
                <li>
                  <button>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogItems;
