import { useEffect, useState } from "react";
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

  /**
   * Fetch more gifs
   */
  const handleFetchMore = () => {
    setPosition(position + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const { data, pagination } = await getTrendingGifs({
          position,
        });

        // Append new gifs to the existing list
        setGifs((prevGifs) => [...prevGifs, ...data]);

        // Check if there are more gifs to fetch
        setHasMore(pagination.total_count > position * pagination.count);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
