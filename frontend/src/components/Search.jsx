import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default function Search({ setData }) {
  return <SearchBar setData={setData} />;
}
