import React, {useState, useCallback} from "react";
import styles from "./SearchBarInput.module.css";
import debounce from "just-debounce-it";

function SearchBarInput({ input, setInput, setResults }) {

  const fetchSuggestionsDebounced = useCallback(
    debounce((value) => {
      fetchSuggestions(value)
    }, 300)
  , [])

  const fetchSuggestions = async (value) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}`)
      const data = await response.json()
      setResults(data);
    } catch (error) {
      console.log('error = ', error.message)
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchSuggestionsDebounced(value);
  };

  return (
    <input
      type="text"
      placeholder="Direccion del inmueble"
      className='form-control'
      name="address"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      required
    />
  );
}

export default SearchBarInput;
