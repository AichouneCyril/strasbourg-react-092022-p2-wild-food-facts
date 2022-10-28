/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import appTheme from "./assets/theme/theme";
import SearchBar from "./components/SearchBar";
import "./App.css";

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
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <SearchBar setList={setData} list={data} dataFood={dataFood} />
        <SearchResult newList={data} />
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
