import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataTable } from "./DataTable";

vi.mock("../../ui", () => ({
  Table: ({ columns, data }: { columns: string[]; data: string[][] }) => (
    <div data-testid="table">
      <div data-testid="columns">{columns.join(",")}</div>
      <div data-testid="data">{data.length} rows</div>
    </div>
  ),
  ItemCount: ({ count }: { count: number }) => (
    <div data-testid="item-count">Total: {count}</div>
  ),
}));

vi.mock("../../hooks", () => ({
  useTableState: () => ({
    columns: ["Column1", "Column2"],
    data: [
      ["Row1", "Row1"],
      ["Row2", "Row2"],
    ],
    entriesPerPageOptions: [{ value: 10, label: "10" }],
  }),
  usePagination: () => ({
    currentPage: 1,
    entriesPerPage: 10,
    totalPages: 1,
    paginatedData: [
      ["Row1", "Row1"],
      ["Row2", "Row2"],
    ],
    goToNextPage: vi.fn(),
    goToPreviousPage: vi.fn(),
    handlePageChange: vi.fn(),
    handleEntriesPerPageChange: vi.fn(),
  }),
}));

describe("DataTable", () => {
  it("renders ItemCount", () => {
    render(<DataTable />);
    expect(screen.getByTestId("item-count")).toBeInTheDocument();
    expect(screen.getByText("Total: 2")).toBeInTheDocument();
  });

  it("renders Table", () => {
    render(<DataTable />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });

  it("passes correct data to Table", () => {
    render(<DataTable />);
    expect(screen.getByTestId("columns")).toHaveTextContent("Column1,Column2");
    expect(screen.getByTestId("data")).toHaveTextContent("2 rows");
  });

  it("has correct container styling", () => {
    render(<DataTable />);
    const container = screen.getByTestId("table").parentElement;
    expect(container).toHaveClass("space-y-4");
  });
});
