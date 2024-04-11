import { render, waitFor } from "@testing-library/react";
import { LoadMore } from "./LoadMore";

const mockOnFetchMore = jest.fn();
const mockUseInView = jest.fn();

jest.mock("../hooks/useInView", () => ({
  useInView: () => mockUseInView,
}));

describe("LoadMore", () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({ inView: true });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should not render when no more gifs", () => {
    const { queryByText } = render(
      <LoadMore hasMore={false} onFetchMore={mockOnFetchMore} loading={false} />
    );

    expect(queryByText("Getting Gifs …")).not.toBeInTheDocument();
  });

  it("should render when more gifs are available", () => {
    const { queryByText } = render(
      <LoadMore hasMore={true} onFetchMore={mockOnFetchMore} loading={true} />
    );

    expect(queryByText("Getting Gifs …")).toBeInTheDocument();
  });

  it("should fetch more when inView and not loading", () => {
    render(
      <LoadMore hasMore={true} onFetchMore={mockOnFetchMore} loading={false} />
    );

    waitFor(() => {
      expect(mockOnFetchMore).toHaveBeenCalled();
    });
  });

  it("should not fetch more when not inView", () => {
    mockUseInView.mockReturnValue({ inView: false });

    render(
      <LoadMore hasMore={true} onFetchMore={mockOnFetchMore} loading={false} />
    );

    expect(mockOnFetchMore).not.toHaveBeenCalled();

    waitFor(() => {
      expect(mockOnFetchMore).not.toHaveBeenCalled();
    });
  });
});
