// Modules
import { SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import News from "../news/News";
import Pagination from "./Pagination";

// Types
import { INewPostsData } from "../../types/posts.types";

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
          {data?.data[0].id > -1 ? (
            data.data.map((dataEl, index) => {
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
          data?.data[0].id > -1 ? (
            <Pagination
              pages={data?.meta.total}
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
