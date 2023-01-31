// Components
import Aside from "../components/aside/Aside";
import NewsScroll from "../components/global/NewsScroll";
import MainImg from "../components/category/MainImg";

// Images
import Placeholder from "../assets/images/placeholder3.png";

const Category = () => {
  return (
    <main className="category">
      <div className="container">
        <div className="category-inner">
          <div className="category-left">
            <MainImg img={Placeholder} />
            <NewsScroll />
          </div>
          <div className="category-right">
            <Aside />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
