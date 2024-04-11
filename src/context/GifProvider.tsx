import { useState } from "react";
import { GifContext } from "./GifContext";

const GifProvider = ({ children }: React.PropsWithChildren) => {
  const [imageIds, setImageIds] = useState<string[]>([]);

  const addImageId = (id: string) => {
    setImageIds([...imageIds, id]);
  };

  const removeImageId = (id: string) => {
    const ids = imageIds.filter((imageId) => imageId !== id);
    setImageIds(ids);
  };

  return (
    <GifContext.Provider value={{ imageIds, addImageId, removeImageId }}>
      {children}
    </GifContext.Provider>
  );
};

export { GifProvider };
