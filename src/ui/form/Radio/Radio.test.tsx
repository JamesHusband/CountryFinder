import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";

describe("Radio", () => {
  const mockOnChange = vi.fn();

  it("renders radio input", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("displays label text", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio Label"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("Test Radio Label")).toBeInTheDocument();
  });

  it("has correct id attribute", () => {
    render(
      <Radio
        id="custom-id"
        name="test-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("id", "custom-id");
  });

  it("has correct name attribute", () => {
    render(
      <Radio
        id="test-radio"
        name="radio-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("name", "radio-group");
  });

  it("has correct value attribute", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="radio-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("value", "radio-value");
  });

  it("is checked when checked prop is true", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        checked={true}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).toBeChecked();
  });

  it("is not checked when checked prop is false", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        checked={false}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
  });

  it("is not checked by default", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("has label associated with input", () => {
    render(
      <Radio
        id="test-radio"
        name="test-group"
        value="test-value"
        label="Test Radio"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole("radio");
    const label = screen.getByText("Test Radio");

    expect(label).toHaveAttribute("for", "test-radio");
    expect(radio).toHaveAttribute("id", "test-radio");
  });
});
