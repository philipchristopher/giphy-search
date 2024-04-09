import { GifList } from "../components/GifList";
import { Loading } from "../components/Loading";
import { useTrendingGifs } from "../hooks/useTrendingGifs";

const TrendingPage = () => {
  const { error, gifs, loading } = useTrendingGifs();

  console.log("gifs: ", gifs);
  console.log("error: ", error);

  return (
    <div>
      {loading && <Loading />}
      <GifList gifs={gifs} />
    </div>
  );
};

export { TrendingPage };
