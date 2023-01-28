// Modules
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// Types
import { ActiveLinkType } from "../../types/store.types";

// Actions
import { setActiveLink } from "../../actions/setActiveLink.action";

// Animations
import { linkMotion } from "../../animations/subNav.animations";

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
    link: "/1",
  },
  {
    data: "Новости",
    link: "/2",
  },
  {
    data: "В мире",
    link: "/3",
  },
  {
    data: "Политика",
    link: "/4",
  },
  {
    data: "Экономика",
    link: "/5",
  },
  {
    data: "Спорт",
    link: "/6",
  },
  {
    data: "Культура",
    link: "/7",
  },
  {
    data: "Общество",
    link: "/8",
  },
  {
    data: "Наука и Технологии",
    link: "/9",
  },
];

const SubNav = () => {
  const activeLink = useSelector<ActiveLinkType, ActiveLinkType["active"]>(
    (state) => state.active
  );
  const dispatch = useDispatch();

  const onClickLink = (active: number) => {
    dispatch(setActiveLink(active));
  };

  return (
    <nav className="subnav">
      <div className="container">
        <ul className="subnav-inner">
          {subNavData.map((subNavEl: subNavDataType, index: number) => {
            return (
              <motion.li
                key={uuidv4()}
                initial={linkMotion.rest}
                animate={
                  activeLink === index + 1 ? linkMotion.active : linkMotion.rest
                }
              >
                <motion.div
                  initial={linkMotion.linkRest}
                  whileHover={linkMotion.linkHover}
                >
                  <Link
                    to={`/category${subNavEl.link}`}
                    onClick={() => onClickLink(index + 1)}
                    className={activeLink === index + 1 ? "active" : ""}
                  >
                    {subNavEl.data}
                  </Link>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
