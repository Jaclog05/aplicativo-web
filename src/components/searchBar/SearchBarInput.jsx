import React, {useCallback} from "react";
import debounce from "just-debounce-it";

function SearchBarInput({ input, setInput, setResults }) {
  const { VITE_MAPBOX_TOKEN } = import.meta.env;

  
  const fetchSuggestions = useCallback(async (value) => {
    try {
      const bbox = "-74.861526,10.904110,-74.751663,11.036908"
      const countryLimit = "co";
      const encodedQuery = encodeURIComponent(value)

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedQuery}.json?country=${countryLimit}&fuzzyMatch=true&bbox=${bbox}&types=address&access_token=${VITE_MAPBOX_TOKEN}`
      )

      const data = await response.json()
      setResults(data.features || []);
    } catch (error) {
      console.log('error = ', error.message)
    }
  }, [setResults]);

  const debouncedFetch = useCallback(
    debounce((value) => {
      if(value.length > 2) fetchSuggestions(value);
    }, 300),
    [fetchSuggestions]
  )

  const handleChange = (value) => {
    setInput(value);
    debouncedFetch(value);
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
