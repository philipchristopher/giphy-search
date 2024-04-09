import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Handles the trending search form to navigate to the search page.
 */
const useTrendingSearchGifs = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Navigate to the search page with the query.
    navigate(`/search/${query}`);
  };

  return {
    handleChange,
    handleSubmit,
    query,
  };
};

export { useTrendingSearchGifs };
