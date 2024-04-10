import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

describe("SearchBox", () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();
  let mockLoading = false;

  beforeEach(() => {
    render(
      <SearchBox
        loading={mockLoading}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        query=""
      />
    );
  });

  it("renders the search input", () => {
    const searchInput = screen.getByPlaceholderText("Search for GIFs");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls onChange when typing in the search input", () => {
    const searchInput = screen.getByPlaceholderText("Search for GIFs");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("calls onSubmit when the form is submitted", () => {
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  mockLoading = true;
  it("disables the submit button when loading", () => {
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
});
