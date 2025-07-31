import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useContinentOptions } from "./useContinentOptions";

describe("useContinentOptions", () => {
  it("exports hook", () => {
    expect(useContinentOptions).toBeDefined();
  });

  it("returns continent options state and functions", () => {
    const { result } = renderHook(() => useContinentOptions(), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toHaveProperty("options");
    expect(result.current).toHaveProperty("loading");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("updateOptions");
    expect(result.current).toHaveProperty("setLoading");
    expect(result.current).toHaveProperty("setError");
    expect(typeof result.current.updateOptions).toBe("function");
    expect(typeof result.current.setLoading).toBe("function");
    expect(typeof result.current.setError).toBe("function");
  });
});
