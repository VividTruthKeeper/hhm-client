import { Variants } from "framer-motion";

export const linkMotion: Variants = {
  rest: {
    fontWeight: "normal",
    background: "rgba(241,241, 241, 1)",
    type: "tween",
  },
  active: {
    fontWeight: "bold",
    background: "rgba(56,163,157, 1)",
    color: "#ffffff",
    type: "spring",
  },

  // linkRest: {
  //   type: "tween",
  // },
  // linkHover: {
  //   type: "spring",
  // },
};

export const catMotion: Variants = {
  rest: {
    display: "block",
    opacity: 0,
    transform: "translateY(-10rem)",
    type: "tween",
  },
  active: {
    display: "block",
    opacity: 1,
    transform: "translateY(0rem)",
    type: "tween",
  },

  menuRest: {
    rotate: "0",
    type: "spring",
  },
  menuActive: {
    rotate: "90deg",
    type: "spring",
  },
};

export const dropdownMotion: Variants = {
  rest: {
    y: "5rem",
    opacity: 0,
    pointerEvents: "none",
  },

  active: {
    y: "0rem",
    opacity: 1,
    pointerEvents: "all",
  },

  linkRest: {
    borderBottom: "0.1rem solid rgba(255, 255, 255, 0)",
    fontWeight: "normal",
  },
  linkActive: {
    borderBottom: "0.1rem solid rgba(255, 255, 255, 1)",
    fontWeight: "bold",
  },
};
