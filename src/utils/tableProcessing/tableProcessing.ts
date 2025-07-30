import type { Country } from "../../types";

interface DataMapping {
  key: string;
  label: string;
  extractor: (country: Country) => string;
}

const dataMapping: DataMapping[] = [
  {
    key: "continent",
    label: "Continent",
    extractor: (country: Country) => country.continent.name,
  },
  {
    key: "code",
    label: "Code",
    extractor: (country: Country) => country.code,
  },
  {
    key: "name",
    label: "Country",
    extractor: (country: Country) => country.name,
  },
  {
    key: "capital",
    label: "Capital",
    extractor: (country: Country) => country.capital,
  },
  {
    key: "currency",
    label: "Currency",
    extractor: (country: Country) => country.currency,
  },
];

export const tableProcessing = (countries: Country[]) => {
  const columns = dataMapping.map((mapping) => mapping.label);
  const data = countries.map((country) =>
    dataMapping.map((mapping) => mapping.extractor(country))
  );

  return { columns, data };
};
