import { GifList } from "../components/GifList";
import { useGifContext } from "../context/useGifContext";

/**
 * Displays the gifs saved by the user.
 */
const SavedPage = () => {
  const { savedGifs } = useGifContext();

  return (
    <div className="space-y-10">
      <GifList gifs={savedGifs} />
    </div>
  );
};

export { SavedPage };
