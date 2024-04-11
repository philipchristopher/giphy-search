import { GifList } from "../components/GifList";

/**
 * Displays the gifs saved by the user.
 */
const SavedPage = () => {
  //   const { gifs } = useSearchGifs();

  return (
    <div className="space-y-10">
      <p>Display gifs here</p>
      <GifList gifs={[]} />
    </div>
  );
};

export { SavedPage };
