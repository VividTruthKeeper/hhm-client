// Modules
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Types
import { RootState } from "../../types/store.types";
import { ICategoriesData } from "../../types/data.types";

// Actions
import { setActiveLink } from "../../actions/setActiveLink.action";

// Api
import { Api } from "../../api/Api";
import { url } from "../../url";

// Components
import Loader from "../global/Loader";
import SubNavLi from "./SubNavLi";
import { categoriesParams } from "../../api/params";

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
  const api = new Api(url + "/categories", categoriesParams);

  useEffect(() => {
    api.get(data, setData);
  }, [language]);

  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes("category")) {
      onClickLink(0);
      return;
    }
    const category = location.pathname[location.pathname.length - 1];
    onClickLink(parseInt(category));
  }, [location]);

  return (
    <nav className="subnav">
      <div className="container">
        <ul className="subnav-inner">
          {data ? (
            <>
              <SubNavLi
                isNotCategory
                dataEl={{ id: 0, name: "Главная" }}
                activeLink={activeLink}
                onClickLink={onClickLink}
              />
              {data.data.map((dataEl) => {
                return (
                  <SubNavLi
                    key={uuidv4()}
                    dataEl={dataEl}
                    activeLink={activeLink}
                    onClickLink={onClickLink}
                  />
                );
              })}
            </>
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
