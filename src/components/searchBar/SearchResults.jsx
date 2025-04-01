import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ results, handleSuggestionSelected, hasSearched, inputValue }) {
  return (
    <div className={styles.resultsWrapper}>
      {hasSearched && inputValue && results.length === 0 ? (
        <em className="fst-italic fst-italic text-center py-2">
          No se hallaron resultados
        </em>
      ) : (
        results?.map((result, id) => {
          const address = result.place_name || "Dirección no disponible";
          const coordinates = result.geometry?.coordinates;
  
          return (
            <div
              key={id}
              className={styles.searchResult}
              onClick={() => {
                console.log('coordinates', coordinates)
                if(coordinates) {
                  handleSuggestionSelected(address, coordinates);
                }
              }}
            >
              {address}
            </div>
          );
        })
      )}
    </div>
  );
}

export default SearchResults;
