import { GifResponse } from "./types";

type GifsByQueryPayload = {
  query: string;
};

/**
 * Fetch gifs by search query from the Giphy API.
 */
const getGifsByQuery = async ({
  query,
}: GifsByQueryPayload): Promise<GifResponse> => {
  const params = new URLSearchParams({
    api_key: import.meta.env.VITE_APP_GIPHY_API_KEY || "",
    rating: "g",
    limit: "10",
    offset: "0",
    q: query,
  });

  const endpoint = `${
    import.meta.env.VITE_APP_GIPHY_API_BASE_URL
  }/search?${params.toString()}`;

  const response = await fetch(endpoint);
  const json = await response.json();

  if (json?.meta?.status !== 200) {
    throw new Error(json.meta.msg);
  }

  return {
    data: json.data,
    pagination: json.pagination,
  };
};

export { getGifsByQuery };
