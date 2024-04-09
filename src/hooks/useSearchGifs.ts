import { useCallback, useEffect, useState } from "react";
import { getGifsByQuery } from "../data-access/getGifsByQuery";
import { Gif } from "../data-access/types";
import { useNavigate } from "react-router-dom";

type SearchGifsPayload = {
  urlQuery?: string;
};

/**
 * Fetching data for GIFs by search term.
 */
const useSearchGifs = ({ urlQuery = "" }: SearchGifsPayload) => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>(urlQuery);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /**
   * Get GIFs.
   */
  const getGifs = useCallback(async (term: string) => {
    // Bail if no search term
    if (!term || !term.trim()) {
      return;
    }

    setLoading(true);

    try {
      const { data } = await getGifsByQuery({ query: term });
      setGifs(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error searching GIFs.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

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

    if (!query || !query.trim()) {
      return;
    }

    // Storing query in URL for better UX
    navigate(`/search/${query}`, { replace: false });
  };

  /**
   * Fetch gifs when the url query changes
   */
  useEffect(() => {
    if (urlQuery) {
      // Updating the query from the url will help maintain back/forward browser state.
      setQuery(urlQuery);
      getGifs(urlQuery);
    }
  }, [getGifs, urlQuery]);

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
