// Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Images
import Placeholder from '../../assets/images/placeholder3.png';

// Components
import ContentItem from './ContentItem';

// Static
import { titlePlaceholder } from './MainContent';

const ContentSlider = () => {
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
          type: 'bullets',
        }}>
        <SwiperSlide>
          <ContentItem type="big" img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <ContentItem type="big" img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <ContentItem type="big" img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
        <SwiperSlide>
          <ContentItem type="big" img={Placeholder} title={titlePlaceholder} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContentSlider;
