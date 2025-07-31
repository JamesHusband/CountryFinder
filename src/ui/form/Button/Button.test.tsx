import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  const mockOnClick = vi.fn();

  it("renders button with children", () => {
    render(<Button onClick={mockOnClick}>Click me</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    render(<Button onClick={mockOnClick}>Test Button</Button>);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("has primary variant styling by default", () => {
    render(<Button onClick={mockOnClick}>Primary Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600", "text-white");
  });

  it("has secondary variant styling", () => {
    render(
      <Button variant="secondary" onClick={mockOnClick}>
        Secondary Button
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-200", "text-gray-900");
  });

  it("has text variant styling", () => {
    render(
      <Button variant="text" onClick={mockOnClick}>
        Text Button
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-gray-600", "underline");
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Button onClick={mockOnClick} disabled>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("has correct size classes", () => {
    render(
      <Button size="sm" onClick={mockOnClick}>
        Small Button
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-3", "py-1.5", "text-sm");
  });

  it("accepts custom className", () => {
    render(
      <Button onClick={mockOnClick} className="custom-class">
        Custom Button
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
