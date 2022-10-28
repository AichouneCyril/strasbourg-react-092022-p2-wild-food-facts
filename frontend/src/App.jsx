import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import ThemeProvider from "./theme";
import Home from "./pages/Home"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
        <PageCard>
          <FiltersList />
        </PageCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
