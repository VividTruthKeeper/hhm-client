// Modules
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { url } from "../../url";
import { Api } from "../../api/Api";
import { asideParams } from "../../api/params";

// Components
import SectionTitle from "../global/SectionTitle";
import AsideNews from "./AsideNews";
import Calendar from "./Calendar";
import { IPostsData } from "../../types/data.types";
import Loader from "../global/Loader";

interface Props {
  type: "latest" | "popular";
}

interface IData {
  data: IPostsData[];
}

const Aside = ({ type }: Props) => {
  const api = new Api(
    url + `${type === "popular" ? "/popular" : ""}/posts`,
    asideParams
  );

  const [data, setData] = useState<IData>();

  useEffect(() => {
    api.get(data, setData);
  }, []);

  return (
    <div className="aside">
      <div className="aside-wrapper">
        <SectionTitle
          title={type === "latest" ? "Последние новости" : "Самое читаемое"}
        />
        <div className="aside-inner">
          {type === "popular" ? (
            data ? (
              (data as any).data.map((el: any) => {
                return (
                  <AsideNews
                    key={uuidv4()}
                    title={el.title}
                    date={el.published_at}
                    category={el.categories[0] ? el.categories[0].name : ""}
                    img={
                      el.featured_images[0] ? el.featured_images[0].path : ""
                    }
                    id={el.id}
                  />
                );
              })
            ) : (
              <Loader />
            )
          ) : data ? (
            (data as any).map((el: any) => {
              return (
                <AsideNews
                  key={uuidv4()}
                  title={el.title}
                  date={el.published_at}
                  category={el.categories[0] ? el.categories[0].name : ""}
                  img={el.featured_images[0] ? el.featured_images[0].path : ""}
                  id={el.id}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="aside-calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Aside;
