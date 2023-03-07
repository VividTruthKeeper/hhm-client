// Modules
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

// Components
import News from '../news/News';
import SectionTitle from './SectionTitle';
import Loader from './Loader';
import Pagination from './Pagination';

// Api
import { url } from '../../url';
import { Api } from '../../api/Api';
import { newsScrollParams } from '../../api/params';

// Types
import { IPostsData } from '../../types/data.types';
import { RootState } from '../../types/store.types';

// Actions
import { setNewsScroll } from '../../actions/setData';
import { INewPostsData } from '../../types/posts.types';

interface Props {
  title: boolean;
  category?: number;
  count?: number;
  avoidFirst?: boolean;
}

const NewsScroll = ({ title, category, count, avoidFirst }: Props) => {
  const params = newsScrollParams.slice();
  category ? params.push({ name: 'category', value: category }) : null;
  count ? (params[0].value = count) : null;

  const api = new Api(url + '/pagination/posts', params);
  const language = api.language;
  const [lastLanguage, setLastLanguage] = useState<string>(language);

  // redux
  const rawData = useSelector<RootState, RootState['newsScroll']['data']>(
    (state) => state.newsScroll.data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(rawData, (data: INewPostsData) => dispatch(setNewsScroll(data)));
    setLastLanguage(language);
  }, [category]);

  useEffect(() => {
    if (rawData.status_code > 0) {
      if (!(lastLanguage === language)) {
        api.get(rawData, (rawData) => dispatch(setNewsScroll(rawData)));
        setLastLanguage(language);
      }
    }
  }, [language, lastLanguage]);

  const [filteredData, setFilteredData] = useState<INewPostsData['data']['data']>(
    rawData.data.data,
  );

  useEffect(() => {
    const filtered = rawData.data.data.filter((el, index) => {
      if (index >= 0) {
        return el;
      }
    });
    setFilteredData(filtered);
  }, [rawData]);

  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        {title === true ? (
          <SectionTitle
            title={
              language === 'EN' ? 'Newsline' : language === 'RU' ? 'Лента новостей' : 'Habarlar'
            }
            linkData={{
              link: '/all',
              title: `${
                language === 'EN' ? 'View all' : language === 'RU' ? 'Посмотреть все' : 'Doly gör'
              }`,
            }}
          />
        ) : null}
        <div className="news-scroll-inner">
          {filteredData.length > 0 ? (
            (filteredData as INewPostsData['data']['data'])[0].id > -1 ? (
              (filteredData as INewPostsData['data']['data']).map((dataEl, index) => {
                if (avoidFirst) {
                  if (index > 0) {
                    return (
                      <News
                        key={uuidv4()}
                        id={dataEl?.id}
                        title={dataEl?.title}
                        text={dataEl?.excerpt}
                        date={dataEl?.published_at}
                        categories={dataEl?.categories}
                        img={dataEl?.featured_images[0]?.path}
                        video={dataEl?.video}
                      />
                    );
                  }
                } else {
                  return (
                    <News
                      key={uuidv4()}
                      id={dataEl?.id}
                      title={dataEl?.title}
                      text={dataEl?.excerpt}
                      date={dataEl?.published_at}
                      categories={dataEl?.categories}
                      img={dataEl?.featured_images[0]?.path}
                      video={dataEl?.video}
                    />
                  );
                }
              })
            ) : (
              <Loader />
            )
          ) : (
            <p className="scroll-empty">Нет новостей в этой категории</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsScroll;
