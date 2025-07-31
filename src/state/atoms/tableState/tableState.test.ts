import { describe, it, expect } from "vitest";
import { tableState } from "./tableState";

describe("tableState", () => {
  it("exports atom with correct key", () => {
    expect(tableState).toBeDefined();
    expect(tableState.key).toBe("tableState");
  });
});
