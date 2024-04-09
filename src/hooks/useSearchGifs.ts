import { useState } from "react";
import { getGifsByQuery } from "../data-access/getGifsByQuery";
import { Gif } from "../data-access/types";

/**
 * Fetching data for GIFs by search term.
 */
const useSearchGifs = () => {
  const [query, setQuery] = useState<string>("");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /**
   * Handle the search input change.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  /**
   * Fetch gifs when form submits.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Bail if no search term
    if (!query || !query.trim()) {
      return;
    }

    setLoading(true);

    try {
      const { data } = await getGifsByQuery({ query });
      setGifs(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error searching GIFs.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    gifs,
    handleChange,
    handleSubmit,
    loading,
    query,
  };
};

export { useSearchGifs };
