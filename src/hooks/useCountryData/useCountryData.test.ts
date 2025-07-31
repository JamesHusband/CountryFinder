import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useCountryData } from "./useCountryData";

vi.mock("@apollo/client", () => ({
  useQuery: vi.fn(() => ({
    data: null,
    loading: false,
    error: null,
  })),
  gql: vi.fn(),
}));

describe("useCountryData", () => {
  it("exports hook", () => {
    expect(useCountryData).toBeDefined();
  });

  it("returns country data state", () => {
    const { result } = renderHook(() => useCountryData());

    expect(result.current).toHaveProperty("countries");
    expect(result.current).toHaveProperty("continents");
    expect(result.current).toHaveProperty("loading");
    expect(result.current).toHaveProperty("error");
    expect(Array.isArray(result.current.countries)).toBe(true);
    expect(Array.isArray(result.current.continents)).toBe(true);
    expect(typeof result.current.loading).toBe("boolean");
  });
});
