import { useState } from "react";
import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";

const dataFood = [
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
];

function Item({ name, details }) {
  return (
    <p>
      {name} |neutri_score {details.score} | {details.origin}
    </p>
  );
}

function SearchResult({ newList }) {
  return (
    <>
      {newList.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
        <Item key={index} {...item} />
      ))}
    </>
  );
}

function App() {

  const [data, setData] = useState(dataFood);
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  
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
            teeteet
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

Item.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
};
