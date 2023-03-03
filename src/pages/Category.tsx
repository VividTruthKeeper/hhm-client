// Modules
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Components
import { useParams } from "react-router-dom";
import Aside from "../components/aside/Aside";
import NewsScroll from "../components/global/NewsScroll";
import ContentItem from "../components/main/ContentItem";

// Types
import { RootState } from "../types/store.types";
import Loader from "../components/global/Loader";

const Category = () => {
  let { category } = useParams();
  const data = useSelector<RootState, RootState["newsScroll"]["data"]>(
    (state) => state.newsScroll.data
  );
  return (
    <motion.main
      className="category"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
    >
      <div className="container">
        <div className="category-inner">
          <div className="category-left">
            {data.length > 0 ? (
              data[0].id > -1 ? (
                <ContentItem
                  id={data[0].id}
                  img={
                    data[0].featured_images[0]
                      ? data[0].featured_images[0].path
                      : ""
                  }
                  title={data[0].title}
                  type={"big"}
                />
              ) : (
                <Loader />
              )
            ) : (
              <Loader />
            )}
            <NewsScroll
              title={false}
              category={parseInt(category as string)}
              count={11}
              avoidFirst
            />
          </div>
          <div className="category-right">
            <Aside type="latest" />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Category;
