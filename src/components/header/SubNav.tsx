// Modules
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Types
import { RootState } from "../../types/store.types";
import { ICategoriesData } from "../../types/data.types";

// Actions
import { setActiveLink } from "../../actions/setActiveLink.action";

// Animations
import { linkMotion } from "../../animations/subNav.animations";

// Api
import { Api } from "../../api/Api";
import { url } from "../../url";

// Components
import Loader from "../global/Loader";

const SubNav = () => {
  const activeLink = useSelector<RootState, RootState["activeLink"]["active"]>(
    (state) => state.activeLink.active
  );
  const language = useSelector<RootState, RootState["language"]["title"]>(
    (state) => state.language.title
  );

  const dispatch = useDispatch();

  const onClickLink = (active: number) => {
    dispatch(setActiveLink(active));
  };

  const [data, setData] = useState<ICategoriesData>();

  // Api
  const api = new Api(url + "/categories");

  useEffect(() => {
    api.get(data, setData);
  }, [language]);

  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes("category")) return;
    const category = location.pathname[location.pathname.length - 1];
    onClickLink(parseInt(category));
  }, [location]);

  return (
    <nav className="subnav">
      <div className="container">
        <ul className="subnav-inner">
          <motion.li
            initial={linkMotion.rest}
            animate={activeLink === 0 ? linkMotion.active : linkMotion.rest}
          >
            <motion.div>
              <Link
                to={"/"}
                onClick={() => onClickLink(0)}
                className={activeLink === 0 ? "active" : ""}
              >
                Главная
              </Link>
            </motion.div>
          </motion.li>
          {data ? (
            data.data.map((dataEl) => {
              return (
                <motion.li
                  key={uuidv4()}
                  initial={linkMotion.rest}
                  animate={
                    activeLink === dataEl.id
                      ? linkMotion.active
                      : linkMotion.rest
                  }
                >
                  <motion.div>
                    <Link
                      to={`/category/${dataEl.id}`}
                      onClick={() => onClickLink(dataEl.id)}
                      className={activeLink === dataEl.id ? "active" : ""}
                    >
                      {dataEl.name}
                    </Link>
                  </motion.div>
                </motion.li>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
