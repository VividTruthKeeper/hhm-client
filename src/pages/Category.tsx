// Modules
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// Components
import { useParams } from "react-router-dom";
import Aside from "../components/aside/Aside";
import NewsScroll from "../components/global/NewsScroll";
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import ContentItem from "../components/main/ContentItem";
import Pagination from "../components/global/Pagination";

// Types
import Loader from "../components/global/Loader";
import { INewPostsData } from "../types/posts.types";
import { IurlParamAdder } from "../types/api.types";
import { Api } from "../api/Api";
import { url } from "../url";

const Category = () => {
  let { category } = useParams();
  const [data, setData] = useState<INewPostsData>();
  const [activePage, setActivePage] = useState<number>(1);
  const [params, setParams] = useState<IurlParamAdder[]>([
    { name: "count", value: 11 },
    { name: "page", value: 1 },
    { name: "category", value: category ? category : "" },
  ]);
  const pageMemo = useMemo(
    () => ({ activePage, setActivePage }),
    [activePage, setActivePage]
  );
  const api = new Api(url + "/pagination/posts", params);

  useEffect(() => {
    const newParams = params.slice();
    newParams[1].value = activePage;
    setParams(newParams);
  }, [activePage]);

  useEffect(() => {
    api.get(data, setData);
  }, [params]);

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
            {data ? (
              <ContentItem
                id={data?.data?.data[0]?.id}
                img={data?.data?.data[0]?.featured_images[0]?.path}
                title={data?.data?.data[0]?.title}
                type={"big"}
              />
            ) : (
              <Loader />
            )}
            {data ? (
              <CustomNewsScroll
                data={data}
                pageMemo={pageMemo}
                pagination={true}
                avoidFirst
              />
            ) : null}
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
