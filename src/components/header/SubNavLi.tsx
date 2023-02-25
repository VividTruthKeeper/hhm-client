// Modules
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animations
import { linkMotion } from "../../animations/subNav.animations";

// Types
import { ICategoriesData } from "../../types/data.types";

interface IProps {
  activeLink: number;
  dataEl: ICategoriesData["data"][0];
  onClickLink: (active: number) => void;
  isNotCategory?: boolean;
}

const SubNavLi = ({
  activeLink,
  dataEl,
  onClickLink,
  isNotCategory,
}: IProps) => {
  return (
    <motion.li
      initial={"rest"}
      animate={activeLink === dataEl.id ? "active" : "rest"}
      variants={linkMotion}
    >
      <motion.div>
        <Link
          to={!isNotCategory ? `/category/${dataEl.id}` : "/"}
          onClick={() => onClickLink(dataEl.id)}
          className={activeLink === dataEl.id ? "active" : ""}
        >
          {dataEl.name}
        </Link>
      </motion.div>
    </motion.li>
  );
};

export default SubNavLi;
