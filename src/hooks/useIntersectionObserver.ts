import { useEffect, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [(node: T | null) => void, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [node, setNode] = useState<T | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, options]);

  return [setNode, isIntersecting];
}

export default useIntersectionObserver;


