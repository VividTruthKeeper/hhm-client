// Components
import SectionTitle from "../global/SectionTitle";
import AsideNews from "./AsideNews";
import Calendar from "./Calendar";
// Images
import placeholder2 from "../../assets/images/placeholder2.png";

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside-wrapper">
        <SectionTitle title="Самое читаемое" />
        <div className="aside-inner">
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder2}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder2}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder2}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder2}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={placeholder2}
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
