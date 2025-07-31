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
 *   },
 *   [dependency]
 * );
 * ```
 */
const useAbortableEffect = (
  effect: (signal: AbortSignal) => Promise<() => void>,
  deps: any[],
) => {
  useEffect(() => {
    const controller = new AbortController();
    const cleanupPromise = effect(controller.signal);

    return () => {
      controller.abort();
      cleanupPromise.then((cleanup) => cleanup());
    };
  }, [...deps, effect]);
};

export default useAbortableEffect;
