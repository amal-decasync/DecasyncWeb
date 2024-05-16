"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BlogPostData } from "@/public/data/blog-items";
import PostFilterButtons from "./PostFilterButtons";

const PostFilterItems = () => {
  const [active, setActive] = useState("all");
  const [displayData, setDisplayData] = useState(BlogPostData);

  const handleCategoryClick = (category: SetStateAction<string>) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(BlogPostData);
      return;
    }

    const filteredData = BlogPostData.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 600);
  };

  return (
    <>
      <PostFilterButtons active={active} handleClick={handleCategoryClick} />
      <motion.div className="row mt-60 masonry-grid" layout>
        <AnimatePresence>
          {displayData.slice(0, 8).map((item) => {
            return (
              <motion.div
                className="col-12 col-lg-6 grid-item-main"
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                <div className="tp-lp-slider__single topy-tilt">
                  <div className="thumb mb-24">
                    <Link
                      href="blog-single"
                      className="w-100 overflow-hidden d-block"
                    >
                      <div className="parallax-image-wrap">
                        <div className="parallax-image-inner">
                          <Image
                            src={item.thumb}
                            className="w-100 mh-220 parallax-image"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="tp-lp-post__meta mb-24 mt-8">
                      <p className="author text-xs text-tertiary">
                        {item.author}
                      </p>
                      <span></span>
                      <p className="date text-xs text-tertiary">{item.date}</p>
                    </div>
                    <h5 className="mt-8 fw-5 text-secondary">
                      <Link href="blog-single">{item.title}</Link>
                    </h5>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default PostFilterItems;
