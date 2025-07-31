import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("Select", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const mockOnChange = vi.fn();

  it("renders select element", () => {
    render(
      <Select
        id="test-select"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(
      <Select
        id="test-select"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("shows placeholder when value is empty", () => {
    render(
      <Select
        id="test-select"
        options={mockOptions}
        placeholder="Select an option"
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("calls onChange when option is selected", async () => {
    const user = userEvent.setup();
    render(
      <Select
        id="test-select"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "option2");

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("displays selected value", () => {
    render(
      <Select
        id="test-select"
        options={mockOptions}
        value="option2"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByDisplayValue("Option 2")).toBeInTheDocument();
  });

  it("has correct id attribute", () => {
    render(
      <Select
        id="custom-id"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("id", "custom-id");
  });

  it("renders empty options array", () => {
    render(
      <Select id="test-select" options={[]} value="" onChange={mockOnChange} />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
