import { Box, type BoxProps } from "@chakra-ui/react";
import { Easing, motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box) as any;

type Direction = "up" | "down" | "left" | "right";

type AnimationScrollProps = PropsWithChildren<
  {
    animation?: Easing | Easing[];
    delay?: number;
    direction?: Direction;
    duration?: number;
    offset?: number;
    once?: boolean;
    threshold?: number;
  } & BoxProps
>;

export const AnimationScroll = ({
  animation = "easeIn",
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  offset = 50,
  once = true,
  threshold = 0.1,
  ...boxProps
}: AnimationScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: once, threshold });

  const initialTransform = useMemo(() => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: offset };
      case "down":
        return { opacity: 0, y: -offset };
      case "left":
        return { opacity: 0, x: offset };
      case "right":
        return { opacity: 0, x: -offset };
      default:
        return { opacity: 0 };
    }
  }, [direction, offset]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    } else if (!once) {
      controls.start(initialTransform);
    }
  }, [inView, controls, initialTransform, once]);

  return (
    <MotionBox
      ref={ref}
      initial={initialTransform}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: animation,
      }}
      {...boxProps}
    >
      {children}
    </MotionBox>
  );
};

export default AnimationScroll;
