import FiltersList from "./components/Filters/FiltersList";
import PageCard from "./components/PageCard";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <PageCard>
          <FiltersList />
        </PageCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
