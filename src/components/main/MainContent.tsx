// Modules
import { useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useSelector, useDispatch } from "react-redux";

// Components
import ContentItem from "./ContentItem";
import SectionTitle from "../global/SectionTitle";
import ContentSlider from "./ContentSlider";
import Loader from "../global/Loader";

// Types
import { RootState } from "../../types/store.types";

// Api
import { url } from "../../url";
import { Api } from "../../api/Api";
import { featuredParams } from "../../api/params";
import { setFeatured } from "../../actions/setData";

const MainContent = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState, RootState["featured"]["data"]>(
    (state) => state.featured.data
  );
  const api = new Api(url + "/posts", featuredParams);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<typeof language>(language);

  const getData = () => {
    api.get(data, (data) => dispatch(setFeatured(data)));
  };

  useEffect(() => {
    if (data.length > 0) {
      if (!(data[0].id > -1 && language === lastLanguage)) {
        getData();
        setLastLanguage(language);
      }
    }
  }, [language, lastLanguage]);

  return (
    <>
      <LazyLoadComponent useIntersectionObserver>
        {data[0].id > -1 ? (
          data.length >= 5 ? (
            <div className="main-content">
              {/* <SectionTitle title="Главное" /> */}
              <ContentSlider data={data} />
              <div className="main-content-top">
                <ContentItem
                  id={data[0].id}
                  type="big"
                  img={
                    data[0].featured_images
                      ? data[0].featured_images[0].path
                      : ""
                  }
                  title={data[0].title}
                />
                <ContentItem
                  id={data[1].id}
                  img={
                    data[1].featured_images
                      ? data[1].featured_images[0].path
                      : ""
                  }
                  title={data[1].title}
                />
              </div>
              <div className="main-content-bottom">
                <ContentItem
                  id={data[2].id}
                  img={
                    data[2].featured_images
                      ? data[2].featured_images[0].path
                      : ""
                  }
                  title={data[2].title}
                />
                <ContentItem
                  id={data[3].id}
                  img={
                    data[3].featured_images
                      ? data[3].featured_images[0].path
                      : ""
                  }
                  title={data[3].title}
                />
                <ContentItem
                  id={data[4].id}
                  img={
                    data[4].featured_images
                      ? data[4].featured_images[0].path
                      : ""
                  }
                  title={data[4].title}
                />
              </div>
            </div>
          ) : (
            <Loader />
          )
        ) : (
          <Loader />
        )}
      </LazyLoadComponent>
    </>
  );
};

export default MainContent;
