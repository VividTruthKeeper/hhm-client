// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Components
import NewsArticleImg from "./NewsArticleImg";

// Images
import Placeholder from "../../assets/images/placeholder3.png";

import { titlePlaceholder } from "../main/MainContent";

const NewsArticleSlider = () => {
  return (
    <div className="news-article-slider">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          type: "bullets",
        }}
      >
        <SwiperSlide>
          <NewsArticleImg img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsArticleImg img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsArticleImg img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsArticleImg img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsArticleSlider;
