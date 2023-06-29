import "./App.css";
import { Table } from "./components/table";
import { SearchBar } from "./components/searchBar";

function App() {
  return (
    <div>
      {/* Table and SearchBar imported to the main app */}
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
