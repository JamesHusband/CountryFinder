import { describe, it, expect } from "vitest";
import { GET_COUNTRIES, GET_CONTINENTS } from "./index";

describe("GraphQL exports", () => {
  it("exports GET_COUNTRIES", () => {
    expect(GET_COUNTRIES).toBeDefined();
  });

  it("exports GET_CONTINENTS", () => {
    expect(GET_CONTINENTS).toBeDefined();
  });
});
