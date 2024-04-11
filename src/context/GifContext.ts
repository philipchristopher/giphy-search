import { createContext } from "react";
import { Gif } from "../data-access/types";

type GifContextType = {
  savedGifs: Gif[];
  saveGif: ({ id, url }: Gif) => void;
  removeGif: (id: Gif["id"]) => void;
  isGifSaved: (id: Gif["id"]) => boolean;
};

const GifContext = createContext<GifContextType | null>(null);

export { GifContext };
export type { GifContextType };
