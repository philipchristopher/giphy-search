import { useState } from "react";
import { GifContext } from "./GifContext";

type SavedGif = {
  id: string;
  url: string;
};

const GifProvider = ({ children }: React.PropsWithChildren) => {
  const [imageIds, setImageIds] = useState<SavedGif[]>([]);

  const addImageId = ({ id, url }: SavedGif) => {
    setImageIds([...imageIds, { id, url }]);
  };

  const removeImageId = (id: string) => {
    const ids = imageIds.filter((imageId) => imageId.id !== id);
    setImageIds(ids);
  };

  const isImageSaved = (id: string) =>
    imageIds.some((imageId) => imageId.id === id);

  return (
    <GifContext.Provider
      value={{ imageIds, addImageId, removeImageId, isImageSaved }}
    >
      {children}
    </GifContext.Provider>
  );
};

export type { SavedGif };
export { GifProvider };
