import React from "react";
import styles from "./SearchResults.module.css";

function cleanSuggestionPlaceName(placeName) {
  const sections = placeName.split(",");
  if(sections.length > 1 && /^\s*\d{1,6}\s+/.test(sections[1])) {
    sections[1] = sections[1].replace(/^\s*\d{1,6}\s*/, "")
  }
  return sections.join(",").trim();
}

function SearchResults({ results, handleSuggestionSelected, hasSearched, inputValue }) {
  return (
    <div className={styles.resultsWrapper}>
      {hasSearched && inputValue && results.length === 0 ? (
        <em className="fst-italic fst-italic text-center py-2">
          No se hallaron resultados
        </em>
      ) : (
        results?.map((result, id) => {
          const originalAddress = result.place_name || "Dirección no disponible";
          const address = cleanSuggestionPlaceName(originalAddress)
          const coordinates = result.geometry?.coordinates;
          const zipCode = result.context[0].text;
  
          return (
            <div
              key={id}
              className={styles.searchResult}
              onClick={() => {
                if(coordinates) {
                  handleSuggestionSelected(address, coordinates, zipCode);
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
