import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useDebouncedSearch } from "./useDebouncedSearch";

describe("useDebouncedSearch", () => {
  it("exports hook", () => {
    expect(useDebouncedSearch).toBeDefined();
  });

  it("returns search state and handler", () => {
    const mockOnSearch = () => {};
    const { result } = renderHook(() =>
      useDebouncedSearch({ onSearch: mockOnSearch })
    );

    expect(result.current).toHaveProperty("searchValue");
    expect(result.current).toHaveProperty("handleSearchChange");
    expect(typeof result.current.handleSearchChange).toBe("function");
  });
});
