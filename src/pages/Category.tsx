// Modules
import { motion } from "framer-motion";

// Components
import { useParams } from "react-router-dom";
import Aside from "../components/aside/Aside";
import NewsScroll from "../components/global/NewsScroll";
import MainImg from "../components/category/MainImg";

// Images
import Placeholder from "../assets/images/placeholder3.png";

const Category = () => {
  let { category } = useParams();
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
            <MainImg />
            <NewsScroll title={false} category={parseInt(category as string)} />
          </div>
          <div className="category-right">
            <Aside />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Category;
