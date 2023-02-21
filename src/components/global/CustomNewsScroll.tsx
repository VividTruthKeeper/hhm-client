// Modules
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import News from '../news/News';
import Loader from './Loader';
import Pagination from './Pagination';

// Types
import { IPostsData } from '../../types/data.types';

interface IProps {
  data: IPostsData[];
  word?: string;
  pagination: boolean;
}

const CustomNewsScroll = ({ data, word, pagination = true }: IProps) => {
  const [activePage, setActivePage] = useState<number | string>(1);
  const pageMemo = useMemo(() => ({ activePage, setActivePage }), [activePage, setActivePage]);
  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        <div className="news-scroll-inner">
          {data.length > 0 ? (
            data[0].id > -1 ? (
              data.map((dataEl) => {
                return (
                  <News
                    key={uuidv4()}
                    id={dataEl.id}
                    title={dataEl.title}
                    text={dataEl.excerpt}
                    date={dataEl.published_at}
                    categories={dataEl.categories}
                    img={dataEl.featured_images[0] ? dataEl.featured_images[0].path : ''}
                  />
                );
              })
            ) : (
              <Loader />
            )
          ) : (
            <p className="scroll-empty">Нет новостей для "{word || ''}" </p>
          )}
        </div>
        {pagination ? (
          <Pagination
            pages={3}
            activePage={pageMemo.activePage}
            setActivePage={pageMemo.setActivePage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CustomNewsScroll;
