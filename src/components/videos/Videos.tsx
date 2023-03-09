// Modules
import { useEffect, useState } from "react";
import { v4 as uuiv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { dateParse } from "../../helpers/dateParser";

// Components
import SectionTitle from "../global/SectionTitle";
import VideosItem from "./VideosItem";

// Types
import { RootState } from "../../types/store.types";

// Api
import { Api } from "../../api/Api";
import { url } from "../../url";
import { videoParams } from "../../api/params";

// Actions
import { setVideo } from "../../actions/setData";
import Loader from "../global/Loader";

const Videos = () => {
  const data = useSelector<RootState, RootState["video"]["data"]>(
    (state) => state.video.data
  );
  const api = new Api(url + "/pagination/new/posts", videoParams);
  const language = api.language;
  const dispatch = useDispatch();
  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  useEffect(() => {
    if (!(lastLanguage === language && data.data[0].id > -1)) {
      api.get(data, (data) => dispatch(setVideo(data)));
      setLastLanguage(language);
    }
  }, [lastLanguage, language]);
  return (
    <section className="videos">
      <div className="videos-inner">
        <SectionTitle
          givenClass="videos"
          title={
            language === "EN"
              ? "Videos"
              : language === "RU"
              ? "Видео"
              : "Videolar"
          }
          linkData={{
            link: "/all?type=video",
            title: `${
              language === "EN"
                ? "View all"
                : language === "RU"
                ? "Посмотреть все"
                : "Doly gör"
            }`,
          }}
        />
        <div className="videos-items">
          {data.data[0].id > -1 ? (
            data.data.map((videosDataItem, index) => {
              if (index <= 4) {
                return (
                  <VideosItem
                    key={uuiv4()}
                    url={videosDataItem.video || ""}
                    placeholder={
                      videosDataItem.featured_images[0]
                        ? videosDataItem.featured_images[0].path
                        : ""
                    }
                    date={videosDataItem.published_at}
                    excerpt={videosDataItem.excerpt}
                  />
                );
              }
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Videos;
