

export const pageTransition = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
