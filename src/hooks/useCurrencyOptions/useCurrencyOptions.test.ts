import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useCurrencyOptions } from "./useCurrencyOptions";

describe("useCurrencyOptions", () => {
  it("exports hook", () => {
    expect(useCurrencyOptions).toBeDefined();
  });

  it("returns currency options state and functions", () => {
    const { result } = renderHook(() => useCurrencyOptions(), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toHaveProperty("options");
    expect(result.current).toHaveProperty("loading");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("updateOptions");
    expect(result.current).toHaveProperty("setLoading");
    expect(result.current).toHaveProperty("setError");
    expect(result.current).toHaveProperty("updateOptionsByContinent");
    expect(typeof result.current.updateOptions).toBe("function");
    expect(typeof result.current.setLoading).toBe("function");
    expect(typeof result.current.setError).toBe("function");
    expect(typeof result.current.updateOptionsByContinent).toBe("function");
  });
});
