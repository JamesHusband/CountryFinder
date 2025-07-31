import type { Country } from "../../types";

export const extractUniqueCurrencies = (countries: Country[]): string[] => {
  const allCurrencies = countries
    .map((country) => country.currency)
    .filter((currency) => currency && currency.trim() !== "")
    .flatMap((currency) => currency.split(","))
    .map((currency) => currency.trim())
    .filter((currency) => currency !== "");

  return [...new Set(allCurrencies)].sort();
};
