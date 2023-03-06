// Modules
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Api
import { Api } from "../api/Api";
import { url } from "../url";

// Components
import CustomNewsScroll from "../components/global/CustomNewsScroll";
import Loader from "../components/global/Loader";

// Types
import { IurlParamAdder } from "../types/api.types";
import { IPostsData } from "../types/data.types";
import SectionTitle from "../components/global/SectionTitle";

const AllPosts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || null;

  const [params, setParams] = useState<IurlParamAdder[]>(
    type !== null
      ? [
          {
            name: "count",
            value: 10,
          },
          {
            name: "page",
            value: 1,
          },
          {
            name: "type",
            value: type,
          },
        ]
      : [
          {
            name: "count",
            value: 10,
          },
          {
            name: "page",
            value: 1,
          },
        ]
  );
  const api = new Api(url + "/posts", params);

  const language = api.language;

  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);
  const [data, setData] = useState<IPostsData[]>();

  useEffect(() => {
    api.get(data, setData);
  }, [params]);

  useEffect(() => {
    if (language !== lastLanguage) {
      api.get(data, setData);
      setLastLanguage(language);
    }
  }, [language, lastLanguage]);

  return (
    <main className="all">
      <div className="container">
        <div className="all-inner">
          {type === "video" ? <SectionTitle title={"Видео"} /> : null}
          {data ? (
            <CustomNewsScroll data={data} pagination={false} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </main>
  );
};

export default AllPosts;
