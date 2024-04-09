import { GifResponse } from "./types";

/**
 * Fetch all gifs from the trending Giphy API.
 */
const getTrendingGifs = async (): Promise<GifResponse> => {
  const params = new URLSearchParams({
    api_key: import.meta.env.VITE_APP_GIPHY_API_KEY || "",
    rating: "g",
    limit: "10",
    offset: "0",
  });

  const endpoint = `${
    import.meta.env.VITE_APP_GIPHY_API_BASE_URL
  }/trending?${params.toString()}`;

  const response = await fetch(endpoint);
  const json = await response.json();

  if (json?.meta?.status !== 200) {
    throw new Error(json?.meta?.msg || "An error occurred");
  }

  return {
    data: json.data,
  };
};

export { getTrendingGifs };
