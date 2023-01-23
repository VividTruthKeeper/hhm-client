export const videoArrowMotion: Record<
  string,
  Record<string, string | number | Record<string, string | number>>
> = {
  rest: {
    duration: 0.3,
    type: "spring",
    x: 0,
  },

  hover: {
    x: 10,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};
