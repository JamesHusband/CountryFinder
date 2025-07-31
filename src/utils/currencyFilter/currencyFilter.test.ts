import { describe, it, expect } from "vitest";
import {
  extractUniqueCurrencies,
  extractCurrenciesByContinent,
} from "./currencyFilter";
import type { Country } from "../../types";

describe("currencyFilter", () => {
  const mockCountries: Country[] = [
    {
      name: "United States",
      code: "US",
      continent: { name: "North America" },
      capital: "Washington, D.C.",
      currency: "USD,USN,USS",
    },
    {
      name: "United Kingdom",
      code: "GB",
      continent: { name: "Europe" },
      capital: "London",
      currency: "GBP",
    },
    {
      name: "Germany",
      code: "DE",
      continent: { name: "Europe" },
      capital: "Berlin",
      currency: "EUR",
    },
    {
      name: "France",
      code: "FR",
      continent: { name: "Europe" },
      capital: "Paris",
      currency: "EUR",
    },
    {
      name: "Antarctica",
      code: "AQ",
      continent: { name: "Antarctica" },
      capital: "",
      currency: "",
    },
  ];

  describe("extractUniqueCurrencies", () => {
    it("extracts unique currencies from countries", () => {
      const result = extractUniqueCurrencies(mockCountries);
      expect(result).toEqual(["EUR", "GBP", "USD", "USN", "USS"]);
    });

    it("filters out empty currencies", () => {
      const countriesWithEmptyCurrency: Country[] = [
        {
          name: "Test Country",
          code: "TC",
          continent: { name: "Test" },
          capital: "Test Capital",
          currency: "",
        },
        {
          name: "Another Country",
          code: "AC",
          continent: { name: "Test" },
          capital: "Another Capital",
          currency: "TEST",
        },
      ];

      const result = extractUniqueCurrencies(countriesWithEmptyCurrency);
      expect(result).toEqual(["TEST"]);
    });

    it("handles empty currency values", () => {
      const countriesWithEmptyCurrency: Country[] = [
        {
          name: "Test Country",
          code: "TC",
          continent: { name: "Test" },
          capital: "Test Capital",
          currency: "",
        },
        {
          name: "Another Country",
          code: "AC",
          continent: { name: "Test" },
          capital: "Another Capital",
          currency: "TEST",
        },
      ];

      const result = extractUniqueCurrencies(countriesWithEmptyCurrency);
      expect(result).toEqual(["TEST"]);
    });

    it("splits comma-separated currencies", () => {
      const countriesWithMultipleCurrencies: Country[] = [
        {
          name: "Test Country",
          code: "TC",
          continent: { name: "Test" },
          capital: "Test Capital",
          currency: "CUR1,CUR2,CUR3",
        },
      ];

      const result = extractUniqueCurrencies(countriesWithMultipleCurrencies);
      expect(result).toEqual(["CUR1", "CUR2", "CUR3"]);
    });

    it("trims whitespace from currencies", () => {
      const countriesWithWhitespace: Country[] = [
        {
          name: "Test Country",
          code: "TC",
          continent: { name: "Test" },
          capital: "Test Capital",
          currency: " CUR1 , CUR2 ",
        },
      ];

      const result = extractUniqueCurrencies(countriesWithWhitespace);
      expect(result).toEqual(["CUR1", "CUR2"]);
    });

    it("returns empty array for empty input", () => {
      const result = extractUniqueCurrencies([]);
      expect(result).toEqual([]);
    });
  });

  describe("extractCurrenciesByContinent", () => {
    it("extracts currencies for specific continent", () => {
      const result = extractCurrenciesByContinent(mockCountries, "Europe");
      expect(result).toEqual(["EUR", "GBP"]);
    });

    it("returns empty array for continent with no countries", () => {
      const result = extractCurrenciesByContinent(mockCountries, "Asia");
      expect(result).toEqual([]);
    });

    it("handles continent with countries but no currencies", () => {
      const result = extractCurrenciesByContinent(mockCountries, "Antarctica");
      expect(result).toEqual([]);
    });

    it("splits comma-separated currencies for continent", () => {
      const result = extractCurrenciesByContinent(
        mockCountries,
        "North America"
      );
      expect(result).toEqual(["USD", "USN", "USS"]);
    });

    it("returns empty array for empty input", () => {
      const result = extractCurrenciesByContinent([], "Europe");
      expect(result).toEqual([]);
    });

    it("filters out empty currencies for continent", () => {
      const countriesWithMixedCurrencies: Country[] = [
        {
          name: "Country 1",
          code: "C1",
          continent: { name: "Test" },
          capital: "Capital 1",
          currency: "CUR1",
        },
        {
          name: "Country 2",
          code: "C2",
          continent: { name: "Test" },
          capital: "Capital 2",
          currency: "",
        },
        {
          name: "Country 3",
          code: "C3",
          continent: { name: "Other" },
          capital: "Capital 3",
          currency: "CUR2",
        },
      ];

      const result = extractCurrenciesByContinent(
        countriesWithMixedCurrencies,
        "Test"
      );
      expect(result).toEqual(["CUR1"]);
    });
  });
});
