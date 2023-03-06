// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";

// Components
import ContentItem from "./ContentItem";

// Static
import { IFeaturedData } from "../../types/store.types";

// Types
interface IProps {
  data: IFeaturedData["data"]["data"]["data"];
}

const ContentSlider = ({ data }: IProps) => {
  return (
    <div className="main-content-slider">
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
          clickable: true,
        }}
      >
        {data.map((dataEl) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <ContentItem
                id={dataEl.id}
                type="big"
                img={
                  dataEl.featured_images ? dataEl.featured_images[0].path : ""
                }
                title={dataEl.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ContentSlider;
