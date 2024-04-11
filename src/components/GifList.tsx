import { Gif } from "../data-access/types";
import { GifCard } from "./GifCard";
import { GifCardEmpty } from "./GifCardEmpty";

type GifListProps = {
  gifs: Gif[];
};

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gifs.length === 0 ? (
        <GifCardEmpty />
      ) : (
        <>
          {gifs.map((gif, index) => (
            <GifCard key={`${index}-${gif.id}`} gif={gif} />
          ))}
        </>
      )}
    </div>
  );
};

export { GifList };
