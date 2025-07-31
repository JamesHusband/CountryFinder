import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

vi.mock("./TableWrapper", () => ({
  TableWrapper: ({ children }: { children: React.ReactNode }) => (
    <table data-testid="table-wrapper">{children}</table>
  ),
}));

vi.mock("./TableHeader", () => ({
  TableHeader: ({ columns }: { columns: string[] }) => (
    <thead data-testid="table-header">
      <tr>
        {columns.map((col, index) => (
          <th key={index}>{col}</th>
        ))}
      </tr>
    </thead>
  ),
}));

vi.mock("./TableBody", () => ({
  TableBody: ({ children }: { children: React.ReactNode }) => (
    <tbody data-testid="table-body">{children}</tbody>
  ),
}));

vi.mock("./TableRow", () => ({
  TableRow: ({ children }: { children: React.ReactNode }) => (
    <tr data-testid="table-row">{children}</tr>
  ),
}));

vi.mock("./Pagination", () => ({
  Pagination: () => <div data-testid="pagination">Pagination</div>,
}));

describe("Table", () => {
  const mockProps = {
    columns: ["Column One", "Column 2"],
    data: [
      ["One", "Two"],
      ["Three", "Four"],
    ],
    currentPage: 1,
    totalPages: 1,
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

  it("renders table with data", () => {
    render(<Table {...mockProps} />);

    expect(screen.getByTestId("table-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("table-header")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("renders correct number of rows", () => {
    render(<Table {...mockProps} />);

    const rows = screen.getAllByTestId("table-row");
    expect(rows).toHaveLength(2);
  });
});
