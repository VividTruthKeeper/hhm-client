// Modules
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Instagram } from "../../assets/icons/insta-black.svg";
import { ReactComponent as Facebook } from "../../assets/icons/fb-black.svg";
import { ReactComponent as TikTok } from "../../assets/icons/tiktok-black.svg";

// Components
import Search from "./Search";
import LanguageSelect from "./LanguageSelect";

// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";

// Animation
import { searchMobileMotion } from "../../animations/search.animation";

const Nav = () => {
  const isSmall = useMediaQuery("(max-width: 850px)");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  return (
    <nav className="nav">
      <div className="container">
        {!isSmall ? (
          <div className="nav-inner">
            <div className="nav-left">
              <Search
                isSmall={isSmall}
                isInputFocused={isInputFocused}
                setIsInputFocused={setIsInputFocused}
              />

              <LanguageSelect
                isSmall={isSmall}
                isInputFocused={isInputFocused}
              />
            </div>
            <div className="nav-mid">
              <Link to="/">
                <h1>
                  Türkmenistan <br /> Habarlar Portaly
                </h1>
              </Link>
            </div>
            <div className="nav-right">
              <ul>
                <li>
                  <a href="#" target={"_blank"}>
                    <Instagram />
                    <span>hhm@inst.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" target={"_blank"}>
                    <Facebook />
                    <span>hhm@face.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" target={"_blank"}>
                    <TikTok />
                    <span>@hhm</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <motion.div className="nav-inner mobile">
            <motion.div
              className="nav-mid"
              initial={isSmall ? "logoRest" : {}}
              animate={
                isSmall ? (isInputFocused ? "logoActive" : "logoRest") : {}
              }
              variants={searchMobileMotion}
            >
              <Link to="/">
                <h1>
                  Türkmenistan <br /> Habarlar Portaly
                </h1>
              </Link>
            </motion.div>
            <motion.div
              className="search-wrap"
              initial={isSmall ? "rest" : {}}
              animate={isSmall ? (isInputFocused ? "active" : "rest") : {}}
              variants={searchMobileMotion}
            >
              <Search
                isSmall={isSmall}
                isInputFocused={isInputFocused}
                setIsInputFocused={setIsInputFocused}
              />
            </motion.div>
            <div className="lang-wrap">
              <LanguageSelect
                isSmall={isSmall}
                isInputFocused={isInputFocused}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
