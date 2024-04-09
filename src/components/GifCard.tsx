import { Gif } from "../data-access/types";

type GifCardProps = Pick<Gif, "images" | "title" | "url">;

const GifCard: React.FC<GifCardProps> = ({ images, title, url }) => {
  return (
    <a
      className="flex flex-col justify-start group overflow-hidden w-[200px]"
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <img
        width={200}
        height={200}
        src={images.fixed_width_downsampled.url}
        alt={title}
        className="rounded-xl mb-2 bg-slate-200 object-cover h-[200px]"
      />
      <p className="text-transparent transition-colors -mt-9 rounded-b-lg py-1 px-4 font-semibold drop-shadow-md group-hover:bg-slate-800/30 group-hover:text-white text-sm truncate capitalize">
        {title}
      </p>
    </a>
  );
};

export { GifCard };
