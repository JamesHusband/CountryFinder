import "./index.css";
import { Layout, SearchForm, DataTable } from "./components";

const columns = ["Continent", "Code", "Country", "Capital", "Currency"];
const data = [["Europe", "GB", "United Kingdom", "London", "GBP"]];

function App() {
  return (
    <Layout>
      <SearchForm />
      <DataTable columns={columns} data={data} />
    </Layout>
  );
}

export default App;
