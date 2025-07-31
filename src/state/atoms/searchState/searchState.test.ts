import { describe, it, expect } from "vitest";
import { searchState } from "./searchState";

describe("searchState", () => {
  it("exports atom with correct key", () => {
    expect(searchState).toBeDefined();
    expect(searchState.key).toBe("searchState");
  });
});
