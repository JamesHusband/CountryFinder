import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavigationButton } from "./NavigationButton";

describe("NavigationButton", () => {
  const mockOnClick = vi.fn();

  it("renders next button with correct icon", () => {
    render(
      <NavigationButton
        direction="next"
        onClick={mockOnClick}
        disabled={false}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("›")).toBeInTheDocument();
  });

  it("renders previous button with correct icon", () => {
    render(
      <NavigationButton
        direction="previous"
        onClick={mockOnClick}
        disabled={false}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("‹")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    render(
      <NavigationButton
        direction="next"
        onClick={mockOnClick}
        disabled={false}
      />
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <NavigationButton
        direction="next"
        onClick={mockOnClick}
        disabled={true}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("is not disabled when disabled prop is false", () => {
    render(
      <NavigationButton
        direction="previous"
        onClick={mockOnClick}
        disabled={false}
      />
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});
