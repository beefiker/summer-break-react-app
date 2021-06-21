import React, { useState } from "react";
import { cityApi, tagApi } from "api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();

    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };
  let searchByTerm = async (term) => {
    setLoading(true);
    try {
      const {
        data: { data: cities },
      } = await cityApi.getSearchedCities(term);
      setResult(cities);
    } catch {
      setError("Can't find results");
    } finally {
      setLoading(false);
    }
    console.log(result);
  };

  let updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    setSearchTerm(value);
  };
  return (
    <SearchPresenter
      searchTerm={searchTerm}
      result={result}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
