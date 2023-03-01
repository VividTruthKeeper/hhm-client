// Modules
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { url } from '../../url';

// Components
import SectionTitle from '../global/SectionTitle';
import AsideNews from './AsideNews';
import Calendar from './Calendar';

interface Props {
  type: 'latest' | 'popular';
}

interface Ipost {
  id: number;
  title: string;
  img: string;
  date: string | number;
  category: string;
}

const Aside = ({ type }: Props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${url}/${type === 'popular' ? 'popular/posts' : 'popular/posts'}?locale=ru`)
      .then((res) => {
        setData(res.data);
        console.log(res, res.data);
      });
  }, []);

  return (
    <div className="aside">
      <div className="aside-wrapper">
        <SectionTitle title={type === 'latest' ? 'Последние новости' : 'Самое читаемое'} />
        <div className="aside-inner">
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={''}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={''}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={''}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={''}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={''}
            link=""
          />
        </div>
      </div>
      <div className="aside-calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Aside;
