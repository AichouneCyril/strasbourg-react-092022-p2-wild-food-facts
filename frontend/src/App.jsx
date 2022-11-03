
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

import ThemeProvider from "./theme";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SearchResultsPage from "./pages/SearchResultsPage";
import SearchBar from "./components/SearchBar";


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
    <ThemeProvider>
      <Home />
      <Navbar changeMenu={setMenu} changeOpen={setOpen} />
      {menu && menu !== "home" && (
        <PageCard etatOpen={open} changeOpen={setOpen}>
          <SearchResultsPage />
        </PageCard>
      )}
    </ThemeProvider>

  );
}

export default App;

Item.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
};
