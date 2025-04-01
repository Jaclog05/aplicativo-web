import React, { useState } from "react";
import SearchBarInput from "./SearchBarInput";
import SearchResults from "./SearchResults";

function SearchBar({ onAddressSelected }) {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [hasSearched, setHasSearched] = useState(false)

  const handleSuggestionSelected = (address, coordinates) => {
    setInput(address);
    setResults([]);
    setHasSearched(false)
    onAddressSelected?.(coordinates);
  };

  return (
    <div className="d-grid position-relative">
      <SearchBarInput
        input={input}
        setInput={setInput}
        setResults={setResults}
        setHasSearched={setHasSearched}
      />
      <SearchResults
        results={results}
        inputValue={input}
        hasSearched={hasSearched}
        handleSuggestionSelected={handleSuggestionSelected}
      />
    </div>
  );
}

export default SearchBar;
