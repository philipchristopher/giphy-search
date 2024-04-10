import { Error } from "../components/Error";
import { GifList } from "../components/GifList";
import { LoadMore } from "../components/LoadMore";
import { Loading } from "../components/Loading";
import { TrendingSearchBox } from "../components/TrendingSearchBox";
import { useTrendingGifs } from "../hooks/useTrendingGifs";

const TrendingPage = () => {
  const { error, gifs, handleFetchMore, hasMore, loading } = useTrendingGifs();

  console.log("loading: ", loading);

  return (
    <div className="space-y-10">
      <TrendingSearchBox />

      {error && <Error message={error} />}
      {loading && <Loading />}

      <GifList gifs={gifs} />

      {gifs.length > 0 && (
        <LoadMore
          hasMore={hasMore}
          loading={loading}
          onFetchMore={handleFetchMore}
        />
      )}
    </div>
  );
};

export { TrendingPage };
