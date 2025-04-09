import React, { useState } from "react";
import SearchBarInput from "./SearchBarInput";
import SearchResults from "./SearchResults";

function SearchBar({ onAddressSelected, dispatch }) {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [hasSearched, setHasSearched] = useState(false)

  const handleSuggestionSelected = (address, coordinates, zipCode) => {
    setInput(address);
    setResults([]);
    setHasSearched(false)
    onAddressSelected?.(coordinates);
    dispatch({ type: 'SET_ZIP_CODE', value: zipCode })
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
