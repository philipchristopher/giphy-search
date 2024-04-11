import { createContext } from "react";
import { SavedGif } from "./GifProvider";

type GifContextType = {
  savedGifs: SavedGif[];
  saveGif: ({ id, url }: SavedGif) => void;
  removeGif: (id: SavedGif["id"]) => void;
  isGifSaved: (id: SavedGif["id"]) => boolean;
};

const GifContext = createContext<GifContextType | null>(null);

export { GifContext };
export type { GifContextType };
