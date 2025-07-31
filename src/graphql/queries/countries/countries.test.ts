import { describe, it, expect } from "vitest";
import { GET_COUNTRIES } from "./countries";

describe("GET_COUNTRIES", () => {
  it("exports query", () => {
    expect(GET_COUNTRIES).toBeDefined();
  });

  it("is a GraphQL query", () => {
    expect(typeof GET_COUNTRIES).toBe("object");
    expect(GET_COUNTRIES).toHaveProperty("kind");
    expect(GET_COUNTRIES).toHaveProperty("definitions");
  });
});
