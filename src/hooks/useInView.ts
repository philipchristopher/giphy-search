import { useEffect, useState } from "react";

/**
 * Hook to determine if an element is in view..
 */
const useInView = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    // Set in view when the element is intersecting
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    // Start observing the element (provided from the ref)
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Stop observing the element
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref]);

  return { inView };
};

export { useInView };
