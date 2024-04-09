import { useTrendingSearchGifs } from "../hooks/useTrendingSearchGifs";
import { SearchBox } from "./SearchBox";

const TrendingSearchBox = () => {
  const { query, handleSubmit, handleChange } = useTrendingSearchGifs();

  return (
    <SearchBox
      loading={false}
      onChange={handleChange}
      onSubmit={handleSubmit}
      query={query}
    />
  );
};

export { TrendingSearchBox };
