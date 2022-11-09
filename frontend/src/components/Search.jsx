import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default function Search() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${query}&json=1`
      )
      .then((response) => {
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return <SearchBar query={query} setQuery={setQuery} />;
}
