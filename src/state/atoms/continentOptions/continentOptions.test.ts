import { describe, it, expect } from "vitest";
import { continentOptionsState } from "./continentOptions";

describe("continentOptions", () => {
  it("exports atom with correct key", () => {
    expect(continentOptionsState).toBeDefined();
    expect(continentOptionsState.key).toBe("continentOptionsState");
  });
});
