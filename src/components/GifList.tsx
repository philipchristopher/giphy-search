import { Gif } from "../data-access/types";
import { GifCard } from "./GifCard";

type GifListProps = {
  gifs: Gif[];
};

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gifs.map((gif, index) => (
        <GifCard key={`${index}-${gif.id}`} gif={gif} />
      ))}
    </div>
  );
};

export { GifList };
