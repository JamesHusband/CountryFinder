import "./index.css";
import { Layout, Status } from "./ui";
import { SearchForm, DataTable } from "./components";
import {
  useTableState,
  useContinentOptions,
  useFilterState,
  useCountryData,
} from "./hooks";
import { tableProcessing, filterCountries } from "./utils";
import { useEffect } from "react";

function App() {
  const { updateData, updateColumns, updateCountries, countries } =
    useTableState();
  const { updateOptions } = useContinentOptions();
  const { continent, currency, countryCode } = useFilterState();
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
      updateOptions(continentOptions);
    }
  }, [fetchedContinents, updateOptions]);

  useEffect(() => {
    if (fetchedCountries.length > 0) {
      updateCountries(fetchedCountries);
    }
  }, [fetchedCountries, updateCountries]);

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
      <SearchForm />
      <DataTable />
    </Layout>
  );
}

export default App;
