import { Error } from "../components/Error";
import { GifList } from "../components/GifList";
import { Loading } from "../components/Loading";
import { TrendingSearchBox } from "../components/TrendingSearchBox";
import { useTrendingGifs } from "../hooks/useTrendingGifs";

const TrendingPage = () => {
  const { error, gifs, loading } = useTrendingGifs();

  console.log("gifs: ", gifs);

  return (
    <div className="space-y-10">
      <TrendingSearchBox />

      {error && <Error message={error} />}
      {loading && <Loading />}

      <GifList gifs={gifs} />
    </div>
  );
};

export { TrendingPage };
