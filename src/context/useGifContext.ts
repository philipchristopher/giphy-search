import { useContext } from "react";
import { GifContext, GifContextType } from "./GifContext";

const useGifContext = (): GifContextType => {
  const context = useContext(GifContext);

  if (!context) {
    throw new Error("useGifContext must be used within a GifProvider");
  }

  return context;
};

export { useGifContext };
