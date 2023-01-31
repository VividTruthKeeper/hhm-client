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
