// Modules
import { motion } from 'framer-motion';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Api } from '../../api/Api';

// Animations
import { catMotion, linkMotion } from '../../animations/subNav.animations';

// Types
import { ICategoriesData } from '../../types/data.types';

// Components
import NavDropdown from './NavDropdown';

interface IProps {
  activeLink: number;
  data: ICategoriesData;
  onClickLink: (active: number) => void;
}

const SubNavLiMain = ({ activeLink, data, onClickLink }: IProps) => {
  // Language
  const language = new Api('').language;

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  return (
    <motion.li
      className="sub-nav-li-main"
      initial={'active'}
      variants={linkMotion}
      onClick={() => setDropdownOpen(!dropdownOpen)}>
      <motion.div className="inner">
        <motion.svg
          width="24"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={catMotion}
          initial={'menuRest'}
          animate={dropdownOpen ? 'menuActive' : 'menuRest'}>
          <g clipPath="url(#clip0_343_1783)">
            <path
              d="M20.05 11.0001H3.95C3.42533 11.0001 3 11.4255 3 11.9501V12.0501C3 12.5748 3.42533 13.0001 3.95 13.0001H20.05C20.5747 13.0001 21 12.5748 21 12.0501V11.9501C21 11.4255 20.5747 11.0001 20.05 11.0001Z"
              fill="white"
            />
            <path
              d="M20.05 16.0001H3.95C3.42533 16.0001 3 16.4255 3 16.9501V17.0501C3 17.5748 3.42533 18.0001 3.95 18.0001H20.05C20.5747 18.0001 21 17.5748 21 17.0501V16.9501C21 16.4255 20.5747 16.0001 20.05 16.0001Z"
              fill="white"
            />
            <path
              d="M20.05 6.00012H3.95C3.42533 6.00012 3 6.42545 3 6.95012V7.05012C3 7.57479 3.42533 8.00012 3.95 8.00012H20.05C20.5747 8.00012 21 7.57479 21 7.05012V6.95012C21 6.42545 20.5747 6.00012 20.05 6.00012Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_343_1783">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
        <p className={activeLink === 0 ? 'active' : ''}>
          {language === 'EN' ? 'Categoryes' : language === 'RU' ? 'Категории' : 'Kategoriýalar'}
        </p>
        <p>|</p>
        <p>
          <motion.span
            variants={catMotion}
            initial={'rest'}
            animate={activeLink === 0 ? 'active' : 'rest'}>
            {language === 'EN' ? 'Home' : language === 'RU' ? 'Главная' : 'Esasy sahypa'}
          </motion.span>
          {data.data.map((el) => (
            <motion.span
              key={uuidv4()}
              variants={catMotion}
              initial={'rest'}
              animate={activeLink === el.id ? 'active' : 'rest'}>
              {el.name}
            </motion.span>
          ))}
        </p>
      </motion.div>
      <NavDropdown
        data={data}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        onClickLink={onClickLink}
        activeLink={activeLink}
      />
    </motion.li>
  );
};

export default SubNavLiMain;
