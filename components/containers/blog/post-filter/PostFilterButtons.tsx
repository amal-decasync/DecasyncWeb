import { BlogCategoryButtons } from "@/public/data/blog-category";

const PostFilterButtons = ({ handleClick, active }: any) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="post-filter__wrapper mt-80">
          {BlogCategoryButtons.map((item) => {
            return (
              <button
                aria-label="Filter Post"
                key={item.id}
                className={active === item.title.toLowerCase() ? " active" : ""}
                onClick={() => handleClick(item.title.toLowerCase())}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostFilterButtons;
