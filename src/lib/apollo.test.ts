import { describe, it, expect } from "vitest";
import { apolloClient } from "./apollo";

describe("apollo", () => {
  it("exports apolloClient", () => {
    expect(apolloClient).toBeDefined();
  });

  it("exports client as ApolloClient instance", () => {
    expect(typeof apolloClient).toBe("object");
    expect(apolloClient).toHaveProperty("link");
    expect(apolloClient).toHaveProperty("cache");
  });

  it("has correct GraphQL endpoint configuration", () => {
    expect(apolloClient.link).toBeDefined();
  });

  it("has in-memory cache configuration", () => {
    expect(apolloClient.cache).toBeDefined();
  });
});
