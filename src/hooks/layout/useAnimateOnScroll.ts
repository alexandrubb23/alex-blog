import { useCallback, useEffect, useMemo, useRef } from "react";

export type AnimateOnScrollProps = {
  selector?: string;
  animation?: {
    initial?: {
      opacity?: number;
      x?: number;
      y?: number;
    };
    animate?: {
      opacity?: number;
      x?: number;
      y?: number;
    };
    transition?: {
      duration?: number;
      ease?: string;
      delay?: number;
    };
  };
  once?: boolean;
  rootSelector?: string;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
  offset?: number;
  staggerDelay?: number;
  useRaf?: boolean;
  className?: string;
};

const getTransform = (x = 0, y = 0) => `translate(${x}px, ${y}px)`;

const getOffsetFromDirection = (
  direction: AnimateOnScrollProps["direction"],
  offset: number,
) => {
  switch (direction) {
    case "up":
      return { x: 0, y: offset };
    case "down":
      return { x: 0, y: -offset };
    case "left":
      return { x: offset, y: 0 };
    case "right":
      return { x: -offset, y: 0 };
    default:
      return { x: 0, y: offset };
  }
};

export const useAnimateOnScroll = ({
  selector = "p, pre, code, h1, h2, h3, h4, h5, h6, ul",
  animation,
  direction,
  offset = 20,
  once = true,
  threshold = 0.1,
  rootSelector,
  staggerDelay = 0,
  useRaf = true,
  className,
}: AnimateOnScrollProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElementsRef = useRef<Set<Element>>(new Set());

  const resolvedAnimation = useMemo(() => {
    return {
      initial: {
        opacity: 0,
        ...(direction
          ? getOffsetFromDirection(direction, offset)
          : { x: 0, y: offset }),
        ...animation?.initial,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        ...animation?.animate,
      },
      transition: {
        duration: 0.6,
        ease: "ease-out",
        delay: 0,
        ...animation?.transition,
      },
    };
  }, [direction, offset, animation]);

  const applyInitialStyles = useCallback(
    (element: HTMLElement) => {
      const { opacity, x, y } = resolvedAnimation.initial;
      const { duration, ease, delay } = resolvedAnimation.transition;

      element.style.opacity = String(opacity ?? 0);
      element.style.transform = getTransform(x, y);
      element.style.transition = `
      opacity ${duration}s ${ease} ${delay}s,
      transform ${duration}s ${ease} ${delay}s
    `;
      if (className) element.classList.add(className);
      element.dataset.animationApplied = "true";
    },
    [className, resolvedAnimation],
  );

  const triggerAnimate = useCallback(
    (element: HTMLElement, index: number) => {
      const { opacity, x, y } = resolvedAnimation.animate;
      const delay =
        (resolvedAnimation.transition.delay ?? 0) +
        (index * staggerDelay) / 1000;

      const apply = () => {
        element.style.transitionDelay = `${delay}s`;
        element.style.opacity = String(opacity ?? 1);
        element.style.transform = getTransform(x, y);
      };

      useRaf ? requestAnimationFrame(apply) : apply();
    },
    [resolvedAnimation, staggerDelay, useRaf],
  );

  const intersectingEntry = useCallback(
    (entry: IntersectionObserverEntry, index: number) => {
      const element = entry.target as HTMLElement;

      if (entry.isIntersecting) {
        if (!element.dataset.animationApplied) {
          applyInitialStyles(element);
        }

        animatedElementsRef.current.add(element);
        triggerAnimate(element, index);

        if (once) observerRef.current?.unobserve(element);
      } else if (!once) {
        applyInitialStyles(element);
      }
    },
    [applyInitialStyles, triggerAnimate, once],
  );

  useEffect(() => {
    const root = rootSelector
      ? document.querySelector(rootSelector)
      : document.body;

    if (!root) return;

    const elements = Array.from(root.querySelectorAll(selector)).filter(
      (el) => !animatedElementsRef.current.has(el),
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elements.indexOf(entry.target);
          intersectingEntry(entry, index);
        });
      },
      {
        threshold,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [
    selector,
    rootSelector,
    resolvedAnimation,
    threshold,
    once,
    staggerDelay,
    useRaf,
    intersectingEntry,
  ]);

  useEffect(() => {
    const elementsRef = animatedElementsRef.current;
    return () => {
      observerRef.current?.disconnect();
      elementsRef.clear();
    };
  }, []);
};

export default useAnimateOnScroll;
