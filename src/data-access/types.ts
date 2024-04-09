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
 * Response from the Giphy API.
 */
type GifResponse = {
  data: Gif[];
};

export type { Gif, GifResponse };
