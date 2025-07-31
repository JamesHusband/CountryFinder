import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useSearchState } from "./useSearchState";

describe("useSearchState", () => {
  it("exports hook", () => {
    expect(useSearchState).toBeDefined();
  });

  it("returns search state and update function", () => {
    const { result } = renderHook(() => useSearchState(), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toHaveProperty("searchType");
    expect(result.current).toHaveProperty("searchTypes");
    expect(result.current).toHaveProperty("updateSearchType");
    expect(typeof result.current.updateSearchType).toBe("function");
  });
});
