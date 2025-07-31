import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

vi.mock("./EntriesPerPage", () => ({
  EntriesPerPage: () => <div data-testid="entries-per-page" />,
}));

vi.mock("./PageNavigation", () => ({
  PageNavigation: () => <div data-testid="page-navigation" />,
}));

vi.mock("./PageCount", () => ({
  PageCount: () => <div data-testid="page-count" />,
}));

describe("Pagination", () => {
  const mockProps = {
    currentPage: 3,
    totalPages: 5,
    entriesPerPage: 10,
    entriesPerPageOptions: [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
    ],
    onPageChange: vi.fn(),
    onEntriesPerPageChange: vi.fn(),
    onPreviousPage: vi.fn(),
    onNextPage: vi.fn(),
  };

  it("renders pagination components when totalPages > 1", () => {
    render(<Pagination {...mockProps} />);

    expect(screen.getByTestId("entries-per-page")).toBeInTheDocument();
    expect(screen.getByTestId("page-navigation")).toBeInTheDocument();
    expect(screen.getByTestId("page-count")).toBeInTheDocument();
  });

  it("does not render when totalPages <= 1", () => {
    render(<Pagination {...mockProps} totalPages={1} />);

    expect(screen.queryByTestId("entries-per-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("page-navigation")).not.toBeInTheDocument();
    expect(screen.queryByTestId("page-count")).not.toBeInTheDocument();
  });

  it("does not render when totalPages is 0", () => {
    render(<Pagination {...mockProps} totalPages={0} />);

    expect(screen.queryByTestId("entries-per-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("page-navigation")).not.toBeInTheDocument();
    expect(screen.queryByTestId("page-count")).not.toBeInTheDocument();
  });
});
