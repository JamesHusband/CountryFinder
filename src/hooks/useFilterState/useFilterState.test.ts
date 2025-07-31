import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useFilterState } from "./useFilterState";

describe("useFilterState", () => {
  it("exports hook", () => {
    expect(useFilterState).toBeDefined();
  });

  it("returns filter state and update functions", () => {
    const { result } = renderHook(() => useFilterState(), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toHaveProperty("continent");
    expect(result.current).toHaveProperty("currency");
    expect(result.current).toHaveProperty("countryCode");
    expect(result.current).toHaveProperty("countryName");
    expect(result.current).toHaveProperty("updateContinent");
    expect(result.current).toHaveProperty("updateCurrency");
    expect(result.current).toHaveProperty("updateCountryCode");
    expect(result.current).toHaveProperty("updateCountryName");
    expect(result.current).toHaveProperty("clearFilters");
    expect(typeof result.current.updateContinent).toBe("function");
    expect(typeof result.current.updateCurrency).toBe("function");
    expect(typeof result.current.updateCountryCode).toBe("function");
    expect(typeof result.current.updateCountryName).toBe("function");
    expect(typeof result.current.clearFilters).toBe("function");
  });
});
