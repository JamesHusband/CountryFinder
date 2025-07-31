import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PageButton } from "./PageButton";

describe("PageButton", () => {
  const mockOnClick = vi.fn();

  it("renders button with page number", () => {
    render(
      <PageButton pageNumber={5} onClick={mockOnClick} isActive={false} />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    render(
      <PageButton pageNumber={3} onClick={mockOnClick} isActive={false} />
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("has active styling when isActive is true", () => {
    render(<PageButton pageNumber={2} onClick={mockOnClick} isActive={true} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-200", "text-gray-700");
  });

  it("has inactive styling when isActive is false", () => {
    render(
      <PageButton pageNumber={4} onClick={mockOnClick} isActive={false} />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-gray-500");
  });

  it("renders correct page number", () => {
    render(
      <PageButton pageNumber={7} onClick={mockOnClick} isActive={false} />
    );

    expect(screen.getByText("7")).toBeInTheDocument();
  });
});
