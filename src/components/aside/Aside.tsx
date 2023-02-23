// Components
import SectionTitle from "../global/SectionTitle";
import AsideNews from "./AsideNews";
import Calendar from "./Calendar";

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
            img={""}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={""}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={""}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={""}
            link=""
          />
          <AsideNews
            title="Президент Туркменистана провёл рабочее совещание по цифровой системе"
            date="12.01.2023"
            category="Политика"
            img={""}
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
