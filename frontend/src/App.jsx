import { useState } from "react";
import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
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
