import { useState } from "react";
import { GifContext } from "./GifContext";
import { Gif } from "../data-access/types";

const GifProvider = ({ children }: React.PropsWithChildren) => {
  const [savedGifs, setSavedGifs] = useState<Gif[]>([]);

  const saveGif = (gif: Gif) => {
    setSavedGifs([...savedGifs, gif]);
  };

  const removeGif = (id: string) => {
    const ids = savedGifs.filter((imageId) => imageId.id !== id);
    setSavedGifs(ids);
  };

  const isGifSaved = (id: string) =>
    savedGifs.some((imageId) => imageId.id === id);

  return (
    <GifContext.Provider value={{ savedGifs, saveGif, removeGif, isGifSaved }}>
      {children}
    </GifContext.Provider>
  );
};

export { GifProvider };
