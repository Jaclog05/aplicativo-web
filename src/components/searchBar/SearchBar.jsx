import React, { useState } from "react";
import SearchBarInput from "./SearchBarInput";
import SearchResults from "./SearchResults";

function SearchBar({ onAddressSelected }) {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const handleSuggestionSelected = (address, coordinates) => {
    setInput(address);
    setResults([]);
    onAddressSelected?.(coordinates);
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
