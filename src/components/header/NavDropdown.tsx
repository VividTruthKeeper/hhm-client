// Modules
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// Types
import { ICategoriesData } from "../../types/data.types";
import { dropdownMotion } from "../../animations/subNav.animations";

interface IProps {
  dropdownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
  data: ICategoriesData;
  onClickLink: (active: number) => void;
  activeLink: number;
}

const NavDropdown = ({
  dropdownOpen,
  setDropdownOpen,
  data,
  onClickLink,
  activeLink,
}: IProps) => {
  return (
    <motion.div
      className="nav-dropdown"
      variants={dropdownMotion}
      initial={"rest"}
      animate={dropdownOpen ? "active" : "rest"}
    >
      <ul>
        <li onClick={() => onClickLink(0)} key={uuidv4()}>
          <Link to="/">
            <motion.span
              variants={dropdownMotion}
              initial={"linkRest"}
              animate={activeLink === 0 ? "linkActive" : "linkRest"}
            >
              Главная
            </motion.span>
          </Link>
        </li>
        {data.data.map((el) => (
          <li onClick={() => onClickLink(el.id)} key={uuidv4()}>
            <Link to={`/category/${el.id}`}>
              <motion.span
                variants={dropdownMotion}
                initial={"linkRest"}
                animate={activeLink === el.id ? "linkActive" : "linkRest"}
              >
                {el.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavDropdown;
