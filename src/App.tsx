import "./index.css";
import { Layout } from "./ui";
import { SearchForm, DataTable } from "./components";
import { useTableState, useContinentOptions } from "./hooks";
import { useEffect } from "react";

const mockData = {
  data: {
    continents: [
      {
        code: "EU",
        name: "Europe",
        countries: [
          {
            code: "GB",
            name: "United Kingdom",
            capital: "London",
            currency: "GBP",
          },
        ],
      },
      {
        code: "AS",
        name: "Asia",
        countries: [
          {
            code: "JP",
            name: "Japan",
            capital: "Tokyo",
            currency: "JPY",
          },
        ],
      },
    ],
  },
};

function App() {
  const { updateData, updateColumns } = useTableState();
  const { updateOptions } = useContinentOptions();

  useEffect(() => {
    const continents = mockData.data.continents;

    const continentOptions = continents.map((continent) => ({
      value: continent.code,
      label: continent.name,
    }));

    const dataMapping = [
      { key: "continent", label: "Continent" },
      { key: "code", label: "Code" },
      { key: "name", label: "Country" },
      { key: "capital", label: "Capital" },
      { key: "currency", label: "Currency" },
    ];

    const tableData = continents.flatMap((continent) =>
      continent.countries.map((country) => [
        continent.name,
        country.code,
        country.name,
        country.capital,
        country.currency,
      ])
    );

    const columns = dataMapping.map((mapping) => mapping.label);

    updateColumns(columns);
    updateData(tableData);
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
