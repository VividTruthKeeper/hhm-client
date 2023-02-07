// Modules
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Images
import Placeholder from '../../assets/images/placeholder3.png';

// Components
import ContentItem from './ContentItem';
import SectionTitle from '../global/SectionTitle';
import ContentSlider from './ContentSlider';

export const titlePlaceholder =
  'Полезная информация для поступающих на программы подготовки научных кадров в Туркменистане';

const MainContent = () => {
  return (
    <>
      <LazyLoadComponent useIntersectionObserver>
        <div className="main-content">
          <SectionTitle title="Главное" />
          <ContentSlider />
          <div className="main-content-top">
            <ContentItem type="big" img={Placeholder} title={titlePlaceholder} />
            <ContentItem img={Placeholder} title={titlePlaceholder} />
          </div>
          <div className="main-content-bottom">
            <ContentItem img={Placeholder} title={titlePlaceholder} />
            <ContentItem img={Placeholder} title={titlePlaceholder} />
            <ContentItem img={Placeholder} title={titlePlaceholder} />
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default MainContent;
