import { Variants } from "framer-motion";

export const languageMotion: Variants = {
  rest: {
    maxHeight: "0",
    pointerEvents: "none",
    overflow: "hidden",
    opacity: 0,
  },

  active: {
    maxHeight: "20rem",
    pointerEvents: "all",
    overflow: "visible",
    opacity: 1,
  },

  arrowRest: {
    transform: "rotateX(0deg)",
  },

  arrowActive: {
    transform: "rotateX(180deg)",
  },

  wrapperRest: {
    background: "rgba(255, 255, 255, 0)",
  },

  wrapperActive: {
    background: "#f1f1f1",
  },
};
