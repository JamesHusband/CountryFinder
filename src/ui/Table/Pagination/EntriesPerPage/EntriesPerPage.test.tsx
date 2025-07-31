import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EntriesPerPage } from "./EntriesPerPage";

describe("EntriesPerPage", () => {
  const mockProps = {
    entriesPerPage: 10,
    entriesPerPageOptions: [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 50, label: "50" },
    ],
    onEntriesPerPageChange: vi.fn(),
  };

  it("renders select dropdown with options", () => {
    render(<EntriesPerPage {...mockProps} />);

    expect(screen.getByText("Show")).toBeInTheDocument();
    expect(screen.getByText("entries")).toBeInTheDocument();
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
  });

  it("calls onEntriesPerPageChange when selection changes", async () => {
    const user = userEvent.setup();
    render(<EntriesPerPage {...mockProps} />);

    const select = screen.getByDisplayValue("10");
    await user.selectOptions(select, "20");

    expect(mockProps.onEntriesPerPageChange).toHaveBeenCalled();
  });

  it("displays all options in dropdown", () => {
    render(<EntriesPerPage {...mockProps} />);

    const select = screen.getByDisplayValue("10");
    expect(select).toHaveValue("10");

    expect(select).toHaveTextContent("10");
    expect(select).toHaveTextContent("20");
    expect(select).toHaveTextContent("50");
  });
});
