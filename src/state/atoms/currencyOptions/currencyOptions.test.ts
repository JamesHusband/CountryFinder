import { describe, it, expect } from "vitest";
import { currencyOptionsState } from "./currencyOptions";

describe("currencyOptions", () => {
  it("exports atom with correct key", () => {
    expect(currencyOptionsState).toBeDefined();
    expect(currencyOptionsState.key).toBe("currencyOptionsState");
  });
});
