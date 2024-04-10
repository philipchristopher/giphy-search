import { GifResponse } from "./types";

type Payload = {
  position?: number;
  limit?: number;
  signal?: AbortSignal;
};

/**
 * Fetch all gifs from the trending Giphy API.
 */
const getTrendingGifs = async ({
  position = 0,
  limit = 10,
  signal,
}: Payload): Promise<GifResponse> => {
  const params = new URLSearchParams({
    api_key: import.meta.env.VITE_APP_GIPHY_API_KEY || "",
    rating: "g",
    limit: `${limit}`,
    offset: `${position * limit}`,
  });

  const endpoint = `${
    import.meta.env.VITE_APP_GIPHY_API_BASE_URL
  }/trending?${params.toString()}`;

  const response = await fetch(endpoint, { signal });
  const json = await response.json();

  if (json?.meta?.status !== 200) {
    throw new Error(json?.meta?.msg || "An error occurred");
  }

  return {
    data: json.data,
    pagination: json.pagination,
  };
};

export { getTrendingGifs };
