// Modules
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { ReactComponent as ArrowDownBlack } from "../../assets/icons/arrow-down-black.svg";

// Animations
import { languageMotion } from "../../animations/language.animation";

// Types
import { ILanguage, RootState } from "../../types/store.types";

// Actions
import { setLanguage } from "../../actions/setLanguage";

const languages: ILanguage[] = [
  {
    title: "RU",
  },
  {
    title: "EN",
  },
  {
    title: "TM",
  },
];

const LanguageSelect = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const activeLanguage = useSelector<RootState, RootState["language"]["title"]>(
    (state) => state.language.title
  );
  const dispatch = useDispatch();

  const onLanguageClick = (title: ILanguage["title"]) => {
    dispatch(setLanguage(title));
  };
  return (
    <div className="language" onClick={() => setDropdown(!dropdown)}>
      <span>{activeLanguage}</span>
      <ArrowDownBlack />
      <motion.ul
        className="language-dropdown"
        variants={languageMotion}
        initial="rest"
        animate={dropdown ? "active" : "rest"}
      >
        {languages.map((language: ILanguage) => {
          return (
            <li key={uuidv4()}>
              <motion.button
                type="button"
                initial={{
                  background: "#ffffff",
                  type: "tween",
                }}
                whileHover={{
                  background: "#f1f1f1",
                  type: "spring",
                }}
                onClick={() => onLanguageClick(language.title)}
              >
                {language.title}
              </motion.button>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default LanguageSelect;
