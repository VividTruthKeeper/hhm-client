// Components
import News from '../news/News';
import SectionTitle from './SectionTitle';
// Images
import placeholder from '../../assets/images/placeholder.jpg';

// Interface
interface Props {
  state: boolean;
}

const NewsScroll = ({ state }: Props) => {
  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        {state === true ? (
          <SectionTitle title="Лента новостей" linkData={{ link: '/', title: 'Посмотреть все' }} />
        ) : null}
        <div className="news-scroll-inner">
          <News
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            text="Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <News
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            text="Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <News
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            text="Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <News
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            text="Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <News
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            text="Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen». Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsScroll;
