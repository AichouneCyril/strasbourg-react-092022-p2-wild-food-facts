import React, { useState } from "react";
// import axios from "axios";
/* import SearchBar from "./components/SearchBar"; */
// import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import "./App.css";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  // const [product, setProduct] = useState({});
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  /* const [data, setData] = useState(dataFood); */

  // useEffect(() => {
  //   axios
  //     .get("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       console.warn(data.product);
  //       setProduct(data.product);
  //     });
  // }, []);

  // console.warn(product);

  return (
    <ThemeProvider>
      <div className="App">
        <Home
          setData={setData}
          setOpenCard={setOpen}
          setMenu={setMenu}
          query={query}
          setQuery={setQuery}
        />
        {/* <PageCard>
          <FiltersList />
        </PageCard> */}
        <Navbar changeMenu={setMenu} changeOpen={setOpen} />
        {menu && menu !== "home" && (
          <PageCard changeMenu={setMenu} etatOpen={open} changeOpen={setOpen}>
            <SearchResultsPage
              data={data}
              setData={setData}
              query={query}
              setQuery={setQuery}
            />
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
