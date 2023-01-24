// Modules
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Images
import News from '../../assets/images/news.png';

const NewsItem = () => {
  return (
    <section className="news-item">
      <div className="news-head">
        <div className="news-head-top">
          <h4>СПОРТ</h4>
          <p>15:23, 21 января 2023</p>
        </div>
        <h1 className="news-head-bottom">
          В федерации футбола Туркменистана подвели итоги прошедшего года и наметили курс на 2023
          год
        </h1>
      </div>
      <div className="news-img">
        <LazyLoadImage src={News} effect="blur" useIntersectionObserver />
      </div>
      <div className="news-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim laborum nobis
          autem omnis tempora? Optio, exercitationem quo molestias inventore sequi reprehenderit
          nostrum error neque eius repellat dolor odit impedit maxime, ratione mollitia? Suscipit
          exercitationem temporibus provident id sit expedita corporis recusandae iusto! Recusandae
          corrupti impedit at molestias vitae distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ea tempore recusandae
          earum eveniet nemo voluptatem placeat eligendi iure reiciendis odio, sunt, nobis harum a
          aut ducimus eaque eum cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim laborum nobis
          autem omnis tempora? Optio, exercitationem quo molestias inventore sequi reprehenderit
          nostrum error neque eius repellat dolor odit impedit maxime, ratione mollitia? Suscipit
          exercitationem temporibus provident id sit expedita corporis recusandae iusto! Recusandae
          corrupti impedit at molestias vitae distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ea tempore recusandae
          earum eveniet nemo voluptatem placeat eligendi iure reiciendis odio, sunt, nobis harum a
          aut ducimus eaque eum cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim laborum nobis
          autem omnis tempora? Optio, exercitationem quo molestias inventore sequi reprehenderit
          nostrum error neque eius repellat dolor odit impedit maxime, ratione mollitia? Suscipit
          exercitationem temporibus provident id sit expedita corporis recusandae iusto! Recusandae
          corrupti impedit at molestias vitae distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ea tempore recusandae
          earum eveniet nemo voluptatem placeat eligendi iure reiciendis odio, sunt, nobis harum a
          aut ducimus eaque eum cupiditate?
        </p>
      </div>
    </section>
  );
};

export default NewsItem;
