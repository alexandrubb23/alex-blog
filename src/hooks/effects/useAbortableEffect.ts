import type { DependencyList } from "react";
import { useEffect } from "react";

/**
 * A custom hook that provides cleanup capabilities for async effects using AbortController.
 *
 * @param effect - Function that receives an AbortSignal and performs async operations
 * @param deps - Dependency array for the effect
 *
 * @example
 * ```tsx
 * useAbortableEffect(
 *   async (signal) => {
 *     const timeout = setTimeout(() => {
 *       if (signal.aborted) return;
 *       // Perform operation
 *     }, 1000);
 *
 *     signal.addEventListener("abort", () => clearTimeout(timeout));
 *
 *     return () => clearTimeout(timeout); // Optional cleanup
 *   },
 *   [dependency]
 * );
 * ```
 */
const useAbortableEffect = (
  effect: (signal: AbortSignal) => Promise<void | (() => void)> | void,
  deps: DependencyList,
) => {
  useEffect(() => {
    const controller = new AbortController();
    let cleanup: (() => void) | undefined;

    const runEffect = async () => {
      try {
        const result = await effect(controller.signal);
        if (typeof result === "function") {
          cleanup = result;
        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Effect error:", error);
        }
      }
    };

    runEffect();

    return () => {
      controller.abort();
      cleanup?.();
    };
  }, deps);
};

export default useAbortableEffect;
