import "./index.css";
import { Layout } from "./ui";
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
  const { updateData, updateColumns, updateCountries } = useTableState();
  const { updateOptions } = useContinentOptions();
  const { continent, currency, countryCode } = useFilterState();
  const { countries, continents, loading, error } = useCountryData();

  useEffect(() => {
    if (continents.length > 0) {
      const continentOptions = continents.map((continent) => ({
        value: continent.name,
        label: continent.name,
      }));

      updateOptions(continentOptions);
    }
  }, [continents, updateOptions]);

  useEffect(() => {
    if (countries.length > 0) {
      updateCountries(countries);
    }
  }, [countries, updateCountries]);

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
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading countries data...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-600">
            Error loading data: {error.message}
          </div>
        </div>
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
