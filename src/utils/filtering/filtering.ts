import type { Country } from "../../types";
import type { FilterState } from "../../state";

export const filterCountries = (
  countries: Country[],
  filters: FilterState
): Country[] => {
  return countries.filter((country) => {
    if (filters.continent && country.continent.name !== filters.continent) {
      return false;
    }

    if (
      filters.currency &&
      !country.currency.toLowerCase().includes(filters.currency.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.countryCode &&
      country.code.toLowerCase() !== filters.countryCode.toLowerCase()
    ) {
      return false;
    }

    return true;
  });
};
