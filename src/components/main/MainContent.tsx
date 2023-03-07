// Modules
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import ContentItem from "./ContentItem";
import ContentSlider from "./ContentSlider";
import Loader from "../global/Loader";

// Types
import { RootState } from "../../types/store.types";

// Api
import { url } from "../../url";
import { Api } from "../../api/Api";
import { featuredParams } from "../../api/params";
import { setFeatured } from "../../actions/setData";
import { INewPostsData } from "../../types/posts.types";

const MainContent = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState, RootState["featured"]["data"]>(
    (state) => state.featured.data
  );
  const api = new Api(url + "/pagination/posts", featuredParams);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  useEffect(() => {
    if (!(data.status_code > 0 && language === lastLanguage)) {
      api.get(data, (data: INewPostsData) => dispatch(setFeatured(data)));
      setLastLanguage(language);
    }
  }, [language, lastLanguage]);

  return (
    <div className="main-content-wrapper">
      {data.status_code > 0 ? (
        data.data.data.length >= 5 ? (
          <div className="main-content">
            <ContentSlider data={data.data.data} />
            <div className="main-content-top">
              <ContentItem
                id={data?.data?.data[0]?.id}
                type="big"
                img={data?.data?.data[0]?.featured_images[0]?.path}
                title={data?.data?.data[0]?.title}
              />
              <ContentItem
                id={data?.data?.data[1]?.id}
                img={data?.data?.data[1]?.featured_images[0]?.path}
                title={data?.data?.data[1]?.title}
              />
            </div>
            <div className="main-content-bottom">
              <ContentItem
                id={data?.data?.data[2]?.id}
                img={data?.data?.data[2]?.featured_images[0]?.path}
                title={data?.data?.data[2]?.title}
              />
              <ContentItem
                id={data?.data?.data[3]?.id}
                img={data?.data?.data[3]?.featured_images[0]?.path}
                title={data?.data?.data[3]?.title}
              />
              <ContentItem
                id={data?.data?.data[4]?.id}
                img={data?.data?.data[4]?.featured_images[0]?.path}
                title={data?.data?.data[4]?.title}
              />
            </div>
          </div>
        ) : (
          <Loader />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MainContent;
