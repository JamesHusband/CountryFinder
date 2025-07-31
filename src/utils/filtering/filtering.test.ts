import { describe, it, expect } from "vitest";
import { filterCountries } from "./filtering";
import type { Country } from "../../types";
import type { FilterState } from "../../state";

describe("filtering", () => {
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
      name: "Canada",
      code: "CA",
      continent: { name: "North America" },
      capital: "Ottawa",
      currency: "CAD",
    },
  ];

  describe("filterCountries", () => {
    it("returns all countries when no filters are applied", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual(mockCountries);
    });

    it("filters by continent", () => {
      const filters: FilterState = {
        continent: "Europe",
        currency: "",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([
        mockCountries[1],
        mockCountries[2],
        mockCountries[3],
      ]);
    });

    it("filters by currency with fuzzy search", () => {
      const filters: FilterState = {
        continent: "",
        currency: "USD",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0]]);
    });

    it("filters by currency with comma-separated values", () => {
      const filters: FilterState = {
        continent: "",
        currency: "USN",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0]]);
    });

    it("filters by country code (case insensitive)", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "us",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0]]);
    });

    it("filters by country code with uppercase", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "US",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0]]);
    });

    it("filters by country name (case insensitive)", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "",
        countryName: "united",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0], mockCountries[1]]);
    });

    it("filters by country name with partial match", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "",
        countryName: "germ",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[2]]);
    });

    it("combines continent and currency filters", () => {
      const filters: FilterState = {
        continent: "Europe",
        currency: "EUR",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[2], mockCountries[3]]);
    });

    it("combines continent and country code filters", () => {
      const filters: FilterState = {
        continent: "North America",
        currency: "",
        countryCode: "US",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[0]]);
    });

    it("combines all filters", () => {
      const filters: FilterState = {
        continent: "Europe",
        currency: "EUR",
        countryCode: "DE",
        countryName: "Germany",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([mockCountries[2]]);
    });

    it("returns empty array when no matches found", () => {
      const filters: FilterState = {
        continent: "Asia",
        currency: "",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(mockCountries, filters);
      expect(result).toEqual([]);
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
      ];

      const filters: FilterState = {
        continent: "",
        currency: "TEST",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries(countriesWithEmptyCurrency, filters);
      expect(result).toEqual([]);
    });

    it("returns empty array for empty input", () => {
      const filters: FilterState = {
        continent: "",
        currency: "",
        countryCode: "",
        countryName: "",
      };

      const result = filterCountries([], filters);
      expect(result).toEqual([]);
    });
  });
});
