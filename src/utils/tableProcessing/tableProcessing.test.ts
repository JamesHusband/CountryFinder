import { describe, it, expect } from "vitest";
import { tableProcessing } from "./tableProcessing";
import type { Country } from "../../types";

describe("tableProcessing", () => {
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
  ];

  it("processes countries into table structure", () => {
    const result = tableProcessing(mockCountries);

    expect(result.columns).toEqual([
      "Continent",
      "Code",
      "Country",
      "Capital",
      "Currency",
    ]);

    expect(result.data).toEqual([
      [
        "North America",
        "US",
        "United States",
        "Washington, D.C.",
        "USD,USN,USS",
      ],
      ["Europe", "GB", "United Kingdom", "London", "GBP"],
      ["Europe", "DE", "Germany", "Berlin", "EUR"],
    ]);
  });

  it("handles empty countries array", () => {
    const result = tableProcessing([]);

    expect(result.columns).toEqual([
      "Continent",
      "Code",
      "Country",
      "Capital",
      "Currency",
    ]);

    expect(result.data).toEqual([]);
  });

  it("handles countries with empty values", () => {
    const countriesWithEmptyValues: Country[] = [
      {
        name: "Test Country",
        code: "TC",
        continent: { name: "Test" },
        capital: "",
        currency: "",
      },
    ];

    const result = tableProcessing(countriesWithEmptyValues);

    expect(result.columns).toEqual([
      "Continent",
      "Code",
      "Country",
      "Capital",
      "Currency",
    ]);

    expect(result.data).toEqual([["Test", "TC", "Test Country", "", ""]]);
  });

  it("maintains column order", () => {
    const result = tableProcessing(mockCountries);

    expect(result.columns).toEqual([
      "Continent",
      "Code",
      "Country",
      "Capital",
      "Currency",
    ]);
  });

  it("extracts all required fields", () => {
    const result = tableProcessing(mockCountries);

    result.data.forEach((row) => {
      expect(row).toHaveLength(5);
    });

    expect(result.data[0][0]).toBe("North America");
    expect(result.data[1][0]).toBe("Europe");

    expect(result.data[0][1]).toBe("US");
    expect(result.data[1][1]).toBe("GB");

    expect(result.data[0][2]).toBe("United States");
    expect(result.data[1][2]).toBe("United Kingdom");

    expect(result.data[0][3]).toBe("Washington, D.C.");
    expect(result.data[1][3]).toBe("London");

    expect(result.data[0][4]).toBe("USD,USN,USS");
    expect(result.data[1][4]).toBe("GBP");
  });

  it("handles single country", () => {
    const singleCountry: Country[] = [
      {
        name: "Test Country",
        code: "TC",
        continent: { name: "Test Continent" },
        capital: "Test Capital",
        currency: "TEST",
      },
    ];

    const result = tableProcessing(singleCountry);

    expect(result.columns).toEqual([
      "Continent",
      "Code",
      "Country",
      "Capital",
      "Currency",
    ]);

    expect(result.data).toEqual([
      ["Test Continent", "TC", "Test Country", "Test Capital", "TEST"],
    ]);
  });

  it("preserves data integrity", () => {
    const result = tableProcessing(mockCountries);

    expect(result.data).toHaveLength(mockCountries.length);

    result.data.forEach((row) => {
      expect(row).toHaveLength(result.columns.length);
    });
  });
});
