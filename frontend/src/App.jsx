import React, { useState, useEffect } from "react";
import axios from "axios";
/* import SearchBar from "./components/SearchBar"; */
import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import "./App.css";
import ComparePage from "./components/CompareElments/ComparePage";

/* const dataFood = [
  { name: "Nutella", details: { score: "D", origin: "United-Sate" } },
  { name: "Coca-Cola", details: { score: "D", origin: "United-Sate" } },
  {
    name: "100% mie complet-Harry's",
    details: { score: "A", origin: "United-Sate" },
  },
  {
    name: "Nocciolata-Rigoni di Asiago",
    details: { score: "D", origin: "Italie" },
  },
  { name: "Skyr-Danone", details: { score: "A", origin: "France" } },
];import CarouselCompare from "./components/CompareElments/CarouselCompare";
    <p><ItemFiche/>
      {name} |neutri_score {details.score} | {details.origin}
    </p>
  );
} */

/* function SearchResult({ newList }) {
  return (import CarouselRatio from "./components/CompareElments/CarouselRatio";
    <>
      {newList.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
        <Item key={index} {...item} />
      ))}
    </>
  );
} */

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  const [product, setProduct] = useState({});
  /* const [data, setData] = useState(dataFood); */

  useEffect(() => {
    axios
      .get("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
      .then((response) => response.data)
      .then((data) => {
        console.warn(data.product);
        setProduct(data.product);
      });
  }, []);

  console.warn(product);

  return (
    <ThemeProvider>
      <div className="App">
        <Home />
        <PageCard>
          <FiltersList />
        </PageCard>
        <Navbar changeMenu={setMenu} changeOpen={setOpen} />
        {menu && menu !== "home" && (
          <PageCard etatOpen={open} changeOpen={setOpen}>
            <ComparePage product={product} />
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

/* Item.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,  
}; */
