import { createContext } from "react";

type GifContextType = {
  imageIds: string[];
  addImageId: (id: string) => void;
  removeImageId: (id: string) => void;
  isImageSaved: (id: string) => boolean;
};

const GifContext = createContext<GifContextType | null>(null);

export { GifContext };
export type { GifContextType };
