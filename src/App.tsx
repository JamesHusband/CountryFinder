import "./index.css";
import { Layout } from "./ui";
import { SearchForm, DataTable } from "./components";
import { useTableState, useContinentOptions, useFilterState } from "./hooks";
import { tableProcessing, filterCountries } from "./utils";
import { useEffect } from "react";

const mockContinentsResponse = {
  data: {
    continents: [
      { code: "EU", name: "Europe" },
      { code: "AS", name: "Asia" },
      { code: "NA", name: "North America" },
    ],
  },
};

const mockCountriesResponse = {
  data: {
    countries: [
      {
        code: "GB",
        name: "United Kingdom",
        capital: "London",
        currency: "GBP",
        continent: { name: "Europe" },
      },
      {
        code: "FR",
        name: "France",
        capital: "Paris",
        currency: "EUR",
        continent: { name: "Europe" },
      },
      {
        code: "DE",
        name: "Germany",
        capital: "Berlin",
        currency: "EUR",
        continent: { name: "Europe" },
      },
      {
        code: "IT",
        name: "Italy",
        capital: "Rome",
        currency: "EUR",
        continent: { name: "Europe" },
      },
      {
        code: "ES",
        name: "Spain",
        capital: "Madrid",
        currency: "EUR",
        continent: { name: "Europe" },
      },
      {
        code: "JP",
        name: "Japan",
        capital: "Tokyo",
        currency: "JPY",
        continent: { name: "Asia" },
      },
      {
        code: "CN",
        name: "China",
        capital: "Beijing",
        currency: "CNY",
        continent: { name: "Asia" },
      },
      {
        code: "KR",
        name: "South Korea",
        capital: "Seoul",
        currency: "KRW",
        continent: { name: "Asia" },
      },
      {
        code: "IN",
        name: "India",
        capital: "New Delhi",
        currency: "INR",
        continent: { name: "Asia" },
      },
      {
        code: "US",
        name: "United States",
        capital: "Washington, D.C.",
        currency: "USD",
        continent: { name: "North America" },
      },
      {
        code: "CA",
        name: "Canada",
        capital: "Ottawa",
        currency: "CAD",
        continent: { name: "North America" },
      },
      {
        code: "MX",
        name: "Mexico",
        capital: "Mexico City",
        currency: "MXN",
        continent: { name: "North America" },
      },
    ],
  },
};

function App() {
  const { updateData, updateColumns, updateCountries, countries } =
    useTableState();
  const { updateOptions } = useContinentOptions();
  const { continent, currency, countryCode } = useFilterState();

  useEffect(() => {
    const continentOptions = mockContinentsResponse.data.continents.map(
      (continent) => ({
        value: continent.name,
        label: continent.name,
      })
    );

    updateCountries(mockCountriesResponse.data.countries);
    updateOptions(continentOptions);
  }, [updateCountries, updateOptions]);

  useEffect(() => {
    if (countries.length > 0) {
      const filteredCountries = filterCountries(countries, {
        continent,
        currency,
        countryCode,
      });
      const { columns, data } = tableProcessing(filteredCountries);

      updateColumns(columns);
      updateData(data);
    }
  }, [countries, continent, currency, countryCode, updateColumns, updateData]);

  return (
    <Layout>
      <SearchForm />
      <DataTable />
    </Layout>
  );
}

export default App;
