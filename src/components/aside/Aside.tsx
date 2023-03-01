// Modules
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { url } from '../../url';
import { Api } from '../../api/Api';
import { AsideParams } from '../../api/params';

// Components
import SectionTitle from '../global/SectionTitle';
import AsideNews from './AsideNews';
import Calendar from './Calendar';
import { IPostsData } from '../../types/data.types';
import Loader from '../global/Loader';

interface Props {
  type: 'latest' | 'popular';
}

interface Ipost {
  id: number;
  title: string;
  img: string;
  published_at: string | number;
  category: string;
}

interface Idata {
  data: IPostsData[];
}

const Aside = ({ type }: Props) => {
  const api = new Api(url + `${type === 'popular' ? '/popular' : '/popular'}/posts`, AsideParams);

  const [data, setData] = useState<Idata>();

  useEffect(() => {
    api.get(data, setData);
  }, []);

  return (
    <div className="aside">
      <div className="aside-wrapper">
        <SectionTitle title={type === 'latest' ? 'Последние новости' : 'Самое читаемое'} />
        <div className="aside-inner">
          {data ? (
            data.data.map((el) => {
              return (
                <AsideNews
                  key={uuidv4()}
                  title={el.title}
                  date={el.published_at}
                  category={el.categories[0].name}
                  img={el.featured_images[0] ? el.featured_images[0].path : ''}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="aside-calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Aside;
