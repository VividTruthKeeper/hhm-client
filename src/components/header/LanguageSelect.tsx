// Modules
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// Icons
import { ReactComponent as ArrowDownBlack } from "../../assets/icons/arrow-down-black.svg";

// Animations
import { languageMotion } from "../../animations/language.animation";

interface ILanguage {
  title: "RU" | "EN" | "TM";
}

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
  return (
    <div className="language" onClick={() => setDropdown(!dropdown)}>
      <span>EN</span>
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
