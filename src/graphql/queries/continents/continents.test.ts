import { describe, it, expect } from "vitest";
import { GET_CONTINENTS } from "./continents";

describe("GET_CONTINENTS", () => {
  it("exports query", () => {
    expect(GET_CONTINENTS).toBeDefined();
  });

  it("is a GraphQL query", () => {
    expect(typeof GET_CONTINENTS).toBe("object");
    expect(GET_CONTINENTS).toHaveProperty("kind");
    expect(GET_CONTINENTS).toHaveProperty("definitions");
  });
});
