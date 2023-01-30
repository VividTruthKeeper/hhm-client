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
};
