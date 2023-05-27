import { useSpring, animated } from "react-spring";

const applyAnimation = (duration, trans, scale = 0.5, inView) => {
  const fadeProps = useSpring({
    from: { opacity: 0, transform: `scale(${scale})`, translateY: trans },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "scale(1)" : `scale(${scale})`,
      translateY: inView ? "0px" : trans,
    },
    config: {
      duration: duration,
      easing: (t) => t * t * (3 - 2 * t), // Smooth easing (easeInOut)
    },
  });
  return fadeProps;
};

export default applyAnimation;
