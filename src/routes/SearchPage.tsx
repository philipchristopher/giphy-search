import { SearchBox } from "../components/SearchBox";
import { useSearchGifs } from "../hooks/useSearchGifs";

const SearchPage = () => {
  const { error, gifs, loading, handleChange, handleSubmit, query } =
    useSearchGifs();

  console.log("error", error);
  console.log("loading", loading);
  console.log("gifs", gifs);

  return (
    <div>
      <SearchBox
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        query={query}
      />
    </div>
  );
};

export { SearchPage };
