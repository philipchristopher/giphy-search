import { useEffect, useRef } from "react";
import { FaSpinner } from "../icons/FaSpinner";
import { useInView } from "../hooks/useInView";

type LoadMoreProps = {
  hasMore: boolean;
  onFetchMore: () => void;
  loading?: boolean;
};

/**
 * Fetch more gifs when the user scrolls to the bottom of the page.
 */
const LoadMore: React.FC<LoadMoreProps> = ({
  hasMore,
  onFetchMore,
  loading,
}: LoadMoreProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { inView } = useInView(ref);

  useEffect(() => {
    // Artifically delay the fetch to prevent multiple requests.
    let timeout: NodeJS.Timeout;

    // Fetch more gifs when the user scrolls to the bottom of the page
    if (inView && !loading) {
      timeout = setTimeout(() => {
        onFetchMore();
      }, 700);
    }

    // Clear the timeout if the user scrolls away from the bottom of the page
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [onFetchMore, inView, loading]);

  if (!hasMore) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="bg-slate-100 w-64 mx-auto border-slate-400 rounded-full border my-10 flex items-center justify-center gap-2 p-5 text-center italic tracking-wider text-slate-500"
    >
      <FaSpinner className="mr-1 animate-spin fill-slate-500" />
      Getting Gifs &hellip;
    </div>
  );
};

export { LoadMore };
