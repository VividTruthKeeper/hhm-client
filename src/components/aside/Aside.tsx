// Components
import SectionTitle from '../global/SectionTitle';
import AsideNews from './AsideNews';
// Images
import placeholder from '../../assets/images/placeholder.jpg';

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside-wrapper">
        <SectionTitle title="Лента новостей" linkData={{ link: '/', title: 'Посмотреть все' }} />
        <div className="aside-inner">
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
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

export default Aside;
