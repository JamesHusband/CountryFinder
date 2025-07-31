import { render, screen } from "@testing-library/react";
import { PageNumbers } from "./PageNumbers";

vi.mock("../PageButton", () => ({
  PageButton: () => <div data-testid="page-button" />,
}));

describe("PageNumbers", () => {
  const mockOnPageChange = vi.fn();

  it("renders page buttons", () => {
    render(
      <PageNumbers
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const pageButtons = screen.getAllByTestId("page-button");
    expect(pageButtons).toHaveLength(5);
  });

  it("renders correct number of pages", () => {
    render(
      <PageNumbers
        currentPage={1}
        totalPages={3}
        onPageChange={mockOnPageChange}
      />
    );

    const pageButtons = screen.getAllByTestId("page-button");
    expect(pageButtons).toHaveLength(3);
  });
});
