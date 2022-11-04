import { useState } from "react";
import ComparePage from "./components/CompareElments/ComparePage";
import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";

function App() {
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
            <ComparePage />
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
