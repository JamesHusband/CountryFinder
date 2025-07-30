import "./index.css";
import { Layout } from "./ui";
import { SearchForm, DataTable } from "./components";
import { useTableState, useContinentOptions } from "./hooks";
import { tableProcessing } from "./utils";
import { useEffect } from "react";

const mockContinentsResponse = {
  data: {
    continents: [
      { code: "EU", name: "Europe" },
      { code: "AS", name: "Asia" },
      { code: "NA", name: "North America" },
      { code: "SA", name: "South America" },
      { code: "AF", name: "Africa" },
      { code: "OC", name: "Oceania" },
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
        code: "JP",
        name: "Japan",
        capital: "Tokyo",
        currency: "JPY",
        continent: { name: "Asia" },
      },
      {
        code: "US",
        name: "United States",
        capital: "Washington, D.C.",
        currency: "USD",
        continent: { name: "North America" },
      },
    ],
  },
};

function App() {
  const { updateData, updateColumns } = useTableState();
  const { updateOptions } = useContinentOptions();

  useEffect(() => {
    const continentOptions = mockContinentsResponse.data.continents.map(
      (continent) => ({
        value: continent.code,
        label: continent.name,
      })
    );
    const { columns, data } = tableProcessing(
      mockCountriesResponse.data.countries
    );

    updateColumns(columns);
    updateData(data);
    updateOptions(continentOptions);
  }, [updateColumns, updateData, updateOptions]);

  return (
    <Layout>
      <SearchForm />
      <DataTable />
    </Layout>
  );
}

export default App;
