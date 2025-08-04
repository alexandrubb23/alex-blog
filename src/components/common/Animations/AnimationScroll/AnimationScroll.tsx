import { Box, type BoxProps } from "@chakra-ui/react";
import { Easing, motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { useAbortableEffect } from "@/hooks";
import { type AnimationDirection } from "@/models/animation.type";

const MotionBox = motion(Box) as any;

type AnimationScrollProps = PropsWithChildren<
  {
    animation?: Easing | Easing[];
    delay?: number;
    direction?: AnimationDirection;
    duration?: number;
    offset?: number;
    once?: boolean;
    threshold?: number;
    wait?: number;
  } & BoxProps
>;

export const AnimationScroll = ({
  animation = "easeIn",
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  offset = 20, // Offset 0 will animate as a fade-in
  once = true,
  threshold = 0.1,
  wait = 0, // Wait before starting the animation
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

  useAbortableEffect(
    async (signal) => {
      const timeout = setTimeout(() => {
        if (signal.aborted || !inView) return;
        controls.start({ opacity: 1, x: 0, y: 0 });
      }, wait * 1000);

      return () => {
        clearTimeout(timeout);
      };
    },
    [inView, controls, wait],
  );

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
