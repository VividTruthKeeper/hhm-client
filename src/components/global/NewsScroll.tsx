// Components
import News from '../news/News';
import SectionTitle from './SectionTitle';
// Images
import placeholder from '../../assets/images/placeholder.jpg';

const NewsScroll = () => {
  return (
    <div className="news-scroll">
      <div className="news-scroll-wrapper">
        <SectionTitle title="Лента новостей" linkData={{ link: '/', title: 'Посмотреть все' }} />
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
