import { describe, it, expect } from "vitest";
import { filterState } from "./filterState";

describe("filterState", () => {
  it("exports atom with correct key", () => {
    expect(filterState).toBeDefined();
    expect(filterState.key).toBe("filterState");
  });
});
