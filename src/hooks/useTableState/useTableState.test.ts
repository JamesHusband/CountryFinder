import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useTableState } from "./useTableState";

describe("useTableState", () => {
  it("exports hook", () => {
    expect(useTableState).toBeDefined();
  });

  it("returns table state and update functions", () => {
    const { result } = renderHook(() => useTableState(), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toHaveProperty("columns");
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("countries");
    expect(result.current).toHaveProperty("entriesPerPageOptions");
    expect(result.current).toHaveProperty("updateData");
    expect(result.current).toHaveProperty("updateColumns");
    expect(result.current).toHaveProperty("updateCountries");
    expect(typeof result.current.updateData).toBe("function");
    expect(typeof result.current.updateColumns).toBe("function");
    expect(typeof result.current.updateCountries).toBe("function");
  });
});
