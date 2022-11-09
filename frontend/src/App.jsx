import { useState } from "react";
// import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  const [data, setData] = useState();

  return (
    <ThemeProvider>
      <div className="App">
        <Home setData={setData} />
        {/* <PageCard>
          <FiltersList />
        </PageCard> */}
        <Navbar changeMenu={setMenu} changeOpen={setOpen} />
        {menu && menu !== "home" && (
          <PageCard etatOpen={open} changeOpen={setOpen}>
            <SearchResultsPage data={data} setData={setData} />
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
