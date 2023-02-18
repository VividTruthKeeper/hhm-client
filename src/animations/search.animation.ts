// Types
import { Variants } from "framer-motion";

export const searchMotion: Variants = {
  rest: {
    transform: "translateY(0rem)",
    opacity: 1,
    type: "spring",
  },
  active: {
    transform: "translateX(6rem)",
    opacity: 0,
    type: "tween",
  },
};

export const searchMobileMotion: Variants = {
  rest: {
    width: "12rem",
    right: "8rem",
    type: "spring",
    borderColor: "rgba(166, 166, 166, 0)",
  },
  active: {
    width: "100%",
    right: "0",
    type: "spring",
    borderColor: "rgba(166, 166, 166, 1)",
  },

  logoRest: {
    display: "block",
    opacity: 1,
    transform: "translateX(0%)",
    type: "spring",
  },
  logoActive: {
    opacity: 0,
    transform: "translateX(-150%)",
    type: "spring",
  },

  langRest: {
    opacity: 1,
    transform: "translateX(0%)",
    type: "spring",
  },
  langActive: {
    opacity: 0,
    transform: "translateX(150%)",
    type: "spring",
  },

  loopRest: {
    width: "1.3rem",
    height: "1.4rem",
    type: "spring",
  },
  loopActive: {
    width: "2rem",
    height: "2rem",
    type: "spring",
  },
};
