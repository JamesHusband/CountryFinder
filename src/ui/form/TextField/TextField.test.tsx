import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "./TextField";

describe("TextField", () => {
  const mockOnChange = vi.fn();

  it("renders text input", () => {
    render(<TextField id="test-input" value="" onChange={mockOnChange} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays placeholder text", () => {
    render(
      <TextField
        id="test-input"
        placeholder="Enter text here"
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
  });

  it("displays current value", () => {
    render(
      <TextField id="test-input" value="Current text" onChange={mockOnChange} />
    );

    expect(screen.getByDisplayValue("Current text")).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    render(<TextField id="test-input" value="" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });

  it("has correct id attribute", () => {
    render(<TextField id="custom-id" value="" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "custom-id");
  });

  it("has correct type attribute", () => {
    render(
      <TextField
        id="test-input"
        type="email"
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("has default text type", () => {
    render(<TextField id="test-input" value="" onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("accepts custom className", () => {
    render(
      <TextField
        id="test-input"
        value=""
        onChange={mockOnChange}
        className="custom-class"
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });
});
