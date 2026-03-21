import { useEffect, useState } from "react";

export function useDebounce<T>(value: T) {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return { 
    debounce 
  }
}