import { Error } from "../components/Error";
import { GifList } from "../components/GifList";
import { SearchBox } from "../components/SearchBox";
import { useSearchGifs } from "../hooks/useSearchGifs";

const SearchPage = () => {
  const { error, gifs, loading, handleChange, handleSubmit, query } =
    useSearchGifs();

  return (
    <div className="space-y-10">
      <SearchBox
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        query={query}
      />

      {error && <Error message={error} />}

      <GifList gifs={gifs} />
    </div>
  );
};

export { SearchPage };
