import React, { useState } from "react";
import SearchBarInput from "./SearchBarInput";
import SearchResults from "./SearchResults";

function SearchBar({setCoords, setBounds}) {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const handleSuggestionSelected = (value, coords, bounds) => {
    setInput(value);
    setResults([]);
    setCoords(coords)
    setBounds(bounds)
  };

  return (
    <div className="d-grid position-relative">
      <SearchBarInput
        input={input}
        setInput={setInput}
        setResults={setResults}
      />
      <SearchResults
        results={results}
        handleSuggestionSelected={handleSuggestionSelected}
      />
    </div>
  );
}

export default SearchBar;
