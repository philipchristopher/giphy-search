import { useGifContext } from "../context/useGifContext";
import { Gif } from "../data-access/types";
import { FaHeart } from "../icons/FaHeart";

type GifCardProps = Pick<Gif, "id" | "images" | "title">;

/**
 * Displays a single gif card. The card has an image and a title. The image can
 * be saved by clicking on the card.
 */
const GifCard: React.FC<GifCardProps> = ({ id, images, title }) => {
  const { addImageId, removeImageId, imageIds, isImageSaved } = useGifContext();
  const isActive = isImageSaved(id);
  const handleSaveImage = () => {
    if (imageIds.includes(id)) {
      removeImageId(id);
      return;
    }
    addImageId(id);
  };

  return (
    <button
      className={`flex flex-col justify-start group overflow-hidden w-[200px] group rounded-xl relative ${
        isActive ? "outline outline-rose-500 outline-offset-2 outline-4" : ""
      }`}
      onClick={handleSaveImage}
    >
      <img
        width={200}
        height={200}
        src={images.fixed_width_downsampled.url}
        alt={title}
        className="rounded-xl mb-2 bg-slate-200 object-cover h-[200px] group-hover:scale-110 group-hover:grayscale transition-[transform,colors,filter] group-hover:brightness-[0.3]"
      />
      <FaHeart
        className={`top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute fill-white scale-[5] transition-transform group-hover:opacity-100 opacity-0 ${
          isActive ? "scale-[8] fill-rose-400" : ""
        }`}
      />
      <p className="text-transparent transition-colors -mt-9 rounded-b-lg py-1 px-4 font-semibold drop-shadow-md group-hover:bg-slate-800/30 group-hover:text-white text-sm truncate capitalize">
        {title}
      </p>
    </button>
  );
};

export { GifCard };
