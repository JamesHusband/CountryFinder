import { render, screen } from "@testing-library/react";
import { PageNavigation } from "./PageNavigation";

vi.mock("./NavigationButton", () => ({
  NavigationButton: () => <div data-testid="navigation-button" />,
}));

vi.mock("./PageNumbers", () => ({
  PageNumbers: () => <div data-testid="page-numbers" />,
}));

describe("PageNavigation", () => {
  const mockProps = {
    currentPage: 3,
    totalPages: 5,
    onPageChange: vi.fn(),
    onPreviousPage: vi.fn(),
    onNextPage: vi.fn(),
  };

  it("renders navigation components", () => {
    render(<PageNavigation {...mockProps} />);

    const navigationButtons = screen.getAllByTestId("navigation-button");
    expect(navigationButtons).toHaveLength(2);
    expect(screen.getByTestId("page-numbers")).toBeInTheDocument();
  });

  it("renders when totalPages is greater than 1", () => {
    render(<PageNavigation {...mockProps} />);

    const navigationButtons = screen.getAllByTestId("navigation-button");
    expect(navigationButtons).toHaveLength(2);
    expect(screen.getByTestId("page-numbers")).toBeInTheDocument();
  });

  it("renders when totalPages equals 1", () => {
    render(<PageNavigation {...mockProps} totalPages={1} />);

    const navigationButtons = screen.getAllByTestId("navigation-button");
    expect(navigationButtons).toHaveLength(2);
    expect(screen.getByTestId("page-numbers")).toBeInTheDocument();
  });
});
