// Modules
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

// Images
import Logo from "../../assets/images/logo.png";

// Icons
import ArrowDownBlack from "../../assets/icons/arrow-down-black.svg";
import LoopGray from "../../assets/icons/loop-gray.svg";

const loopMotion = {
  rest: {
    opacity: 0,
    ease: "ease",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    opacity: 1,
    ease: "ease",
    duration: 0.2,
    type: "tween",
  },
};

const blockMotion = {
  rest: {
    opacity: 1,
    duration: 0.2,
    type: "tween",
    x: 0,
  },

  hover: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
    },
  },
};

const SubHeader = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="subheader">
      <div className="container">
        <div className="subheader-inner">
          <ul className="subheader-left">
            <li>
              <div id="time">
                <span className="time">12:30</span>
                <span className="date">14 февраля</span>
              </div>
            </li>
            <li>
              <Link to="/">Туркменистан</Link>
            </li>
            <li>
              <Link to="/">СНГ</Link>
            </li>
            <li>
              <Link to="/">Зарубежье</Link>
            </li>
          </ul>
          <div className="subheader-mid">
            <img src={Logo} alt="" />
          </div>
          <div className="subheader-right">
            <div className="language-wrapper">
              <div className="language-trig">
                <span>EN</span>
                <div>
                  <img src={ArrowDownBlack} alt="" />
                </div>
              </div>
            </div>
            <motion.div className="search-wrapper">
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                }}
              >
                <motion.div
                  initial={"rest"}
                  animate={isTyping ? blockMotion.hover : blockMotion.rest}
                >
                  <img src={LoopGray} alt="" />
                  <span>Search anything</span>
                </motion.div>
                <input
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    event.target.value.length > 0
                      ? setIsTyping(true)
                      : setIsTyping(false);
                  }}
                />
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
