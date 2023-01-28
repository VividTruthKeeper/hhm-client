// Modules
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface subNavDataType {
  data: string;
  link: string;
}
const subNavData: subNavDataType[] = [
  {
    data: "Главная",
    link: "/",
  },
  {
    data: "В Туркменистане",
    link: "/",
  },
  {
    data: "Новости",
    link: "/",
  },
  {
    data: "В мире",
    link: "/",
  },
  {
    data: "Политика",
    link: "/",
  },
  {
    data: "Экономика",
    link: "/",
  },
  {
    data: "Спорт",
    link: "/",
  },
  {
    data: "Культура",
    link: "/",
  },
  {
    data: "Общество",
    link: "/",
  },
  {
    data: "Наука и Технологии",
    link: "/",
  },
];

const SubNav = () => {
  return (
    <nav className="subnav">
      <div className="container">
        <ul className="subnav-inner">
          {subNavData.map((subNavEl: subNavDataType) => {
            return (
              <li key={uuidv4()}>
                <Link to={subNavEl.link}>{subNavEl.data}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
