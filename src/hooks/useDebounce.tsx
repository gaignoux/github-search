import { useEffect, useState } from "react";

/**
 * Custom React hook for debouncing a value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to debounce.
 * @param {number} [delay=1000] - The debounce delay in milliseconds.
 * @returns {T} The debounced value.
 */
export function useDebounce<T>(value: T, delay: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
