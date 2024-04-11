import { Link } from "react-router-dom";

/**
 * Displays an empty gif card
 */
const GifCardEmpty: React.FC = () => {
  return (
    <Link
      to="/search/lets%20go"
      className="flex hover:bg-slate-200 bg-slate-100 text-slate-600 flex-col justify-start rounded-xl p-5"
    >
      Gifs are empty. Try searching for more gifs!
    </Link>
  );
};

export { GifCardEmpty };
