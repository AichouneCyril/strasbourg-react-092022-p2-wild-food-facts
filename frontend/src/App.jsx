import React, { useEffect, useState } from "react";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import "./App.css";
import SearchResultsPage from "./pages/SearchResultsPage";
import ItemFiche from "./components/itemfiche";
import FavoriCard from "./components/FavoriCard";
import FavoriList from "./components/FavoriList";
import ConnectCard from "./components/ConnectCard";
import AllConnect from "./components/AllConnect";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [favorites, setFavorites] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    setFavorites(JSON.parse(window.localStorage.getItem("MY_FAVORITES")) || []);
  }, []);

  useEffect(() => {
    if (favorites.length !== 0)
      window.localStorage.setItem("MY_FAVORITES", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ThemeProvider>
      <div className="App">
        <Home
          setData={setData}
          setOpenCard={setOpen}
          setMenu={setMenu}
          query={query}
          setQuery={setQuery}
          setItem={setItem}
        />
        <Navbar changeMenu={setMenu} changeOpen={setOpen} />
        {menu && menu === "search" && (
          <PageCard changeMenu={setMenu} etatOpen={open} changeOpen={setOpen}>
            <SearchResultsPage
              data={data}
              setData={setData}
              query={query}
              setQuery={setQuery}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </PageCard>
        )}

        {menu && menu === "codebarsearch" && (
          <PageCard changeMenu={setMenu} etatOpen={open} changeOpen={setOpen}>
            <ItemFiche product={item} />
          </PageCard>
        )}
        {menu && menu === "favorite" && (
          <FavoriCard etatOpen={open} changeOpen={setOpen}>
            <FavoriList favorites={favorites} setFavorites={setFavorites} />
          </FavoriCard>
        )}
        {menu && menu === "account" && (
          <ConnectCard etatOpen={open} changeOpen={setOpen}>
            <AllConnect />
          </ConnectCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
