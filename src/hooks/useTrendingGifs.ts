import { useEffect, useRef, useState } from "react";
import { getTrendingGifs } from "../data-access/getTrendingGifs";
import { Gif } from "../data-access/types";

/**
 * Fetching data for trending gifs.
 *
 * Note: We could use 'react-query' for this to benefit from caching,
 * revalidation, etc. but we're keeping it simple.
 */
const useTrendingGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Pagination state
  const [position, setPosition] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const abortControllerRef = useRef<AbortController | null>(null);

  /**
   * Fetch more gifs
   */
  const handleFetchMore = () => {
    // Prevent fetching if there's an error, loading, or no more gifs
    if (error || loading || !hasMore) return;

    setPosition(position + 1);
  };

  useEffect(() => {
    abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const { data, pagination } = await getTrendingGifs({
          position,
          signal: abortControllerRef.current?.signal,
        });

        // Append new gifs to the existing list
        setGifs((prevGifs) => [...prevGifs, ...data]);

        // Check if there are more gifs to fetch
        setHasMore(pagination.total_count > position * pagination.count);
      } catch (error) {
        // Safely ignore abort errors
        if (error instanceof Error && error.name === "AbortError") return;

        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [position]);

  return {
    error,
    gifs,
    handleFetchMore,
    hasMore,
    loading,
  };
};

export { useTrendingGifs };
