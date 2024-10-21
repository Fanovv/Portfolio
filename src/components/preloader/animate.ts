export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 3, delay: 0.2 },
  },
};

export const welcomeTextOpacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 6, delay: 0.2 },
  },
};

export const slideTop = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100dvh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
