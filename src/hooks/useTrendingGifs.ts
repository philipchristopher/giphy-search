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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const { data } = await getTrendingGifs();
        setGifs(data);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    error,
    gifs,
    loading,
  };
};

export { useTrendingGifs };
