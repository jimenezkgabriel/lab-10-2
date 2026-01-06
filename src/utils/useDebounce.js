import { useState, useEffect } from 'react';

/**
 * useDebounce
 * @param {any} value - value to debounce (e.g., search text)
 * @param {number} delay - debounce delay in milliseconds (default: 500)
 * @returns debouncedValue - value that updates only after value has not changed for `delay` ms
 */
export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer that updates debouncedValue after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: if value or delay changes before the timer fires, clear the timeout
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}