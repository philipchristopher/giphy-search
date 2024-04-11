import { useEffect, useState } from "react";
import { GifContext } from "./GifContext";
import { Gif } from "../data-access/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Manage saved gifs
 */
const GifProvider = ({ children }: React.PropsWithChildren) => {
  const { setItem, getItem } = useLocalStorage("savedGifs");

  // Retrieve gifs from local storage
  const savedGifsFromLocalStorage = getItem() as Gif[] | null;

  const [savedGifs, setSavedGifs] = useState<Gif[]>(
    savedGifsFromLocalStorage || []
  );

  // Save gifs to local storage whenever gifs change
  useEffect(() => {
    setItem(savedGifs);
  }, [savedGifs, setItem]);

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
