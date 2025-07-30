import "./index.css";
import { Layout } from "./ui";
import { SearchForm, DataTable } from "./components";
import { useTableState } from "./hooks";
import { useEffect } from "react";

function App() {
  const { updateData, updateColumns } = useTableState();

  useEffect(() => {
    const mockColumns = ["Continent", "Code", "Country", "Capital", "Currency"];
    const mockData = [["Europe", "GB", "United Kingdom", "London", "GBP"]];

    updateColumns(mockColumns);
    updateData(mockData);
  }, [updateColumns, updateData]);

  return (
    <Layout>
      <SearchForm />
      <DataTable />
    </Layout>
  );
}

export default App;
