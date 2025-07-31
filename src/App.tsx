import "./index.css";
import { Layout, Status } from "./ui";
import { CountryForm, DataTable } from "./components";
import {
  useTableState,
  useContinentOptions,
  useCurrencyOptions,
  useFilterState,
  useCountryData,
} from "./hooks";
import {
  tableProcessing,
  filterCountries,
  extractUniqueCurrencies,
} from "./utils";
import { useEffect } from "react";

function App() {
  const { updateData, updateColumns, updateCountries, countries } =
    useTableState();
  const { updateOptions: updateContinentOptions } = useContinentOptions();
  const { updateOptions: updateCurrencyOptions } = useCurrencyOptions();
  const { continent, currency, countryCode, countryName } = useFilterState();
  const {
    countries: fetchedCountries,
    continents: fetchedContinents,
    loading,
    error,
  } = useCountryData();

  useEffect(() => {
    if (fetchedContinents.length > 0) {
      const continentOptions = fetchedContinents.map((continent) => ({
        value: continent.name,
        label: continent.name,
      }));
      updateContinentOptions(continentOptions);
    }
  }, [fetchedContinents, updateContinentOptions]);

  useEffect(() => {
    if (fetchedCountries.length > 0) {
      updateCountries(fetchedCountries);

      const uniqueCurrencies = extractUniqueCurrencies(fetchedCountries);
      const currencyOptions = uniqueCurrencies.map((currency) => ({
        value: currency,
        label: currency,
      }));
      updateCurrencyOptions(currencyOptions);
    }
  }, [fetchedCountries, updateCountries, updateCurrencyOptions]);

  useEffect(() => {
    const filteredCountries = filterCountries(countries, {
      continent,
      currency,
      countryCode,
      countryName,
    });
    const { columns, data } = tableProcessing(filteredCountries);

    updateColumns(columns);
    updateData(data);
  }, [
    countries,
    continent,
    currency,
    countryCode,
    countryName,
    updateColumns,
    updateData,
  ]);

  if (loading) {
    return (
      <Layout>
        <Status type="loading" message="Loading countries data..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Status type="error" message="Error loading data" error={error} />
      </Layout>
    );
  }

  return (
    <Layout>
      <CountryForm />
      <DataTable />
    </Layout>
  );
}

export default App;
