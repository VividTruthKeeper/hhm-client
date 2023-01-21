export const searchFormAnimation: Record<
  string,
  Record<string, string | number | Record<string, string | number>>
> = {
  rest: {
    opacity: 1,
    duration: 0.2,
    type: 'tween',
    x: 0,
  },

  hover: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
    },
  },
};
