import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("usePagination", () => {
  it("exports hook", () => {
    expect(usePagination).toBeDefined();
  });

  it("returns pagination state and functions", () => {
    const testData = ["item1", "item2", "item3"];
    const { result } = renderHook(() => usePagination({ data: testData }));

    expect(result.current).toHaveProperty("currentPage");
    expect(result.current).toHaveProperty("entriesPerPage");
    expect(result.current).toHaveProperty("totalPages");
    expect(result.current).toHaveProperty("paginatedData");
    expect(result.current).toHaveProperty("goToNextPage");
    expect(result.current).toHaveProperty("goToPreviousPage");
    expect(result.current).toHaveProperty("handlePageChange");
    expect(result.current).toHaveProperty("handleEntriesPerPageChange");
    expect(typeof result.current.goToNextPage).toBe("function");
    expect(typeof result.current.goToPreviousPage).toBe("function");
    expect(typeof result.current.handlePageChange).toBe("function");
    expect(typeof result.current.handleEntriesPerPageChange).toBe("function");
  });
});
