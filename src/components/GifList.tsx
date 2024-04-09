import { Gif } from "../data-access/types";
import { GifCard } from "./GifCard";

type GifListProps = {
  gifs: Gif[];
};

const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {gifs.map(({ id, url, images, title }) => (
        <GifCard key={id} images={images} title={title} url={url} />
      ))}
    </div>
  );
};

export { GifList };
