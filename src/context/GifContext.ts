import { createContext } from "react";
import { SavedGif } from "./GifProvider";

type GifContextType = {
  imageIds: SavedGif[];
  addImageId: ({ id, url }: SavedGif) => void;
  removeImageId: (id: SavedGif["id"]) => void;
  isImageSaved: (id: SavedGif["id"]) => boolean;
};

const GifContext = createContext<GifContextType | null>(null);

export { GifContext };
export type { GifContextType };
