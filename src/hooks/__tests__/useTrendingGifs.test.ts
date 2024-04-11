import { act, renderHook, waitFor } from "@testing-library/react";
import { useTrendingGifs } from "../useTrendingGifs";
import { getTrendingGifs } from "../../data-access/getTrendingGifs";
import { Gif } from "../../data-access/types";

const mockGifs: Gif[] = [
  {
    id: "1",
    title: "Test Gif 1",
    images: {
      fixed_width_downsampled: {
        url: "http://test1.gif",
        height: "200",
        width: "200",
        size: "200",
      },
    },
    alt_text: "",
    url: "",
  },
  {
    id: "2",
    title: "Test Gif 2",
    images: {
      fixed_width_downsampled: {
        url: "http://test2.gif",
        height: "200",
        width: "200",
        size: "200",
      },
    },
    alt_text: "",
    url: "",
  },
];

jest.mock("../../data-access/getTrendingGifs", () => ({
  getTrendingGifs: jest.fn(),
}));

describe("useTrendingGifs", () => {
  const originalAbortController = global.AbortController;
  const mockAbortController = { abort: jest.fn() };

  beforeEach(() => {
    (getTrendingGifs as jest.Mock).mockResolvedValue({
      data: mockGifs,
      pagination: { count: 2, offset: 0, total_count: 3 },
    });
    global.AbortController = jest.fn(() => mockAbortController) as jest.Mock;
  });
  afterEach(() => {
    jest.resetAllMocks();
    global.AbortController = originalAbortController;
  });

  it("should return initial values", async () => {
    const { result } = renderHook(() => useTrendingGifs());

    expect(result.current.error).toBe("");
    expect(result.current.gifs).toStrictEqual([]);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.loading).toBe(true);
  });

  it("should fetch trending gifs", async () => {
    const { result } = renderHook(() => useTrendingGifs());

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBe("");
    expect(result.current.gifs).toEqual(mockGifs);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.loading).toBe(false);
  });

  it("should return error message", async () => {
    const errorMessage = "An error occurred";
    (getTrendingGifs as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useTrendingGifs());

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBe(errorMessage);
    expect(result.current.gifs).toStrictEqual([]);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.loading).toBe(false);
  });

  it("should fetch more gifs", async () => {
    const { result } = renderHook(() => useTrendingGifs());

    await waitFor(() => result.current.loading === false);

    act(() => {
      result.current.handleFetchMore();
    });

    await waitFor(() => result.current.loading === false);

    expect(result.current.gifs).toStrictEqual([...mockGifs, ...mockGifs]);
  });

  it("should not have more to load", async () => {
    const { result } = renderHook(() => useTrendingGifs());

    await waitFor(() => result.current.loading === false);

    act(() => {
      result.current.handleFetchMore();
    });

    await waitFor(() => result.current.loading === false);

    act(() => {
      result.current.handleFetchMore();
    });

    await waitFor(() => result.current.loading === false);

    expect(getTrendingGifs as jest.Mock).toHaveBeenCalledTimes(3);
    expect(result.current.gifs).toStrictEqual([
      ...mockGifs,
      ...mockGifs,
      ...mockGifs,
    ]);
    expect(result.current.hasMore).toBe(false);
  });

  it("should abort previous fetch", async () => {
    const { unmount } = renderHook(() => useTrendingGifs());

    act(() => {
      unmount();
    });

    expect(mockAbortController.abort).toHaveBeenCalled();
  });
});
