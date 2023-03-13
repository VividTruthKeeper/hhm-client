// Modules
import { useState, useEffect, useMemo } from "react";

// Components
import { useParams } from "react-router-dom";
import Aside from "../components/aside/Aside";
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import ContentItem from "../components/main/ContentItem";

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
  const api = new Api(url + "/pagination/new/posts", params);

  useEffect(() => {
    const newParams = params.slice();
    newParams[1].value = activePage;
    setParams(newParams);
  }, [activePage]);

  useEffect(() => {
    api.get(data, setData);
  }, [params]);

  return (
    <main className="category">
      <div className="container">
        <div className="category-inner">
          <div className="category-left">
            {data ? (
              <ContentItem
                id={data?.data[0]?.id}
                img={data?.data[0]?.featured_images[0]?.path}
                title={data?.data[0]?.title}
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
    </main>
  );
};

export default Category;
