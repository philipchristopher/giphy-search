import { GifList } from "../components/GifList";
import { useTrendingGifs } from "../hooks/useTrendingGifs";

const TrendingPage = () => {
  const { error, gifs, loading } = useTrendingGifs();

  console.log("gifs: ", gifs);
  console.log("error: ", error);
  console.log("loading: ", loading);

  return (
    <div>
      <GifList />
    </div>
  );
};

export { TrendingPage };
