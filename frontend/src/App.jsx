import { useState } from "react";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);

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
