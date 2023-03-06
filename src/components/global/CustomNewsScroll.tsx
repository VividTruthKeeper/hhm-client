// Modules
import { SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import News from "../news/News";
import Loader from "./Loader";
import Pagination from "./Pagination";

// Types
import { INewPostsData } from "../../types/posts.types";
import { Dispatch } from "@reduxjs/toolkit";

interface IProps {
  data: INewPostsData;
  word?: string;
  pagination: boolean;
  pageMemo: {
    activePage: number;
    setActivePage: any;
  };
  avoidFirst?: boolean;
}

const CustomNewsScroll = ({
  data,
  word,
  pagination = false,
  pageMemo,
  avoidFirst,
}: IProps) => {
  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        <div className="news-scroll-inner">
          {data?.data?.data?.length > 0 ? (
            data.data.data.map((dataEl, index) => {
              if (avoidFirst) {
                if (index > 0) {
                  return (
                    <News
                      key={uuidv4()}
                      id={dataEl?.id}
                      title={dataEl?.title}
                      text={dataEl?.excerpt}
                      date={dataEl?.published_at}
                      categories={dataEl?.categories}
                      img={dataEl?.featured_images[0]?.path}
                      video={dataEl.video}
                    />
                  );
                }
              } else {
                return (
                  <News
                    key={uuidv4()}
                    id={dataEl?.id}
                    title={dataEl?.title}
                    text={dataEl?.excerpt}
                    date={dataEl?.published_at}
                    categories={dataEl?.categories}
                    img={dataEl?.featured_images[0]?.path}
                    video={dataEl.video}
                  />
                );
              }
            })
          ) : (
            <p className="scroll-empty">Нет новостей для "{word || ""}" </p>
          )}
        </div>
        {pagination ? (
          data?.data?.data?.length > 0 ? (
            <Pagination
              pages={data?.data?.total}
              activePage={pageMemo.activePage}
              setActivePage={pageMemo.setActivePage}
            />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default CustomNewsScroll;
