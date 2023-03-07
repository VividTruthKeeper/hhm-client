// Modules
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Types
import { ICategoryData, RootState } from '../../types/store.types';
import { ICategoriesData } from '../../types/data.types';

// Actions
import { setActiveLink } from '../../actions/setActiveLink.action';

// Api
import { Api } from '../../api/Api';
import { url } from '../../url';
import { categoriesParams } from '../../api/params';

// Components
import Loader from '../global/Loader';
import SubNavLi from './SubNavLi';
import SubNavLiMain from './SubNavLiMain';
import { setCategories } from '../../actions/setData';

const SubNav = () => {
  const activeLink = useSelector<RootState, RootState['activeLink']['active']>(
    (state) => state.activeLink.active,
  );

  const categories = useSelector<RootState, RootState['categories']['data']>(
    (state) => state.categories.data,
  );

  const dispatch = useDispatch();

  const onClickLink = (active: number) => {
    dispatch(setActiveLink(active));
  };

  // Api
  const api = new Api(url + '/categories', categoriesParams);
  const language = api.language;

  useEffect(() => {
    api.get(categories, (data: ICategoryData['data']) => dispatch(setCategories(data)));
  }, [language]);

  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes('category')) {
      onClickLink(0);
      return;
    }
    const category = location.pathname.split('/')[location.pathname.split('/').length - 1];
    onClickLink(parseInt(category));
  }, [location]);

  return (
    <nav className="subnav">
      <div className="container">
        <ul className={`subnav-inner ${!(categories.data[0].id > -1) ? 'loading' : ''}`}>
          {categories.data[0].id > -1 ? (
            <>
              <SubNavLiMain data={categories} activeLink={activeLink} onClickLink={onClickLink} />
              {categories.data.map((dataEl, index) =>
                index <= 4 ? (
                  <SubNavLi
                    key={uuidv4()}
                    dataEl={dataEl}
                    activeLink={activeLink}
                    onClickLink={onClickLink}
                  />
                ) : null,
              )}
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
