/**
 * Types for the Giphy API.
 *
 * Does not include all possible fields, only the ones we are interested in.
 */
type Gif = {
  alt_text: string;
  id: string;
  images: {
    fixed_width_downsampled: {
      height: string;
      size: string;
      url: string;
      width: string;
    };
  };
  title: string;
  url: string;
};

/**
 * Paginatation data from Giphy API.
 */
type Pagination = {
  count: number;
  offset: number;
  total_count: number;
};

/**
 * Response from the Giphy API.
 */
type GifResponse = {
  data: Gif[];
  pagination: Pagination;
};

export type { Gif, GifResponse, Pagination };
