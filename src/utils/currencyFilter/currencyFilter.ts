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

export const extractCurrenciesByContinent = (
  countries: Country[],
  continentName: string
): string[] => {
  const continentCountries = countries.filter(
    (country) => country.continent.name === continentName
  );

  const currencies = continentCountries
    .map((country) => country.currency)
    .filter((currency) => currency && currency.trim() !== "")
    .flatMap((currency) => currency.split(","))
    .map((currency) => currency.trim())
    .filter((currency) => currency !== "");

  return [...new Set(currencies)].sort();
};
