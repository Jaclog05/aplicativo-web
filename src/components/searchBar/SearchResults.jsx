import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults({ results, handleSuggestionSelected }) {
  return (
    <div className={styles.resultsWrapper}>
      {results.map((result, id) => {
        return (
          <div
            key={id}
            className={styles.searchResult}
            onClick={() => {
              handleSuggestionSelected(
                result.display_name,
                [parseFloat(result.lat), parseFloat(result.lon)],
                result.boundingbox
              )
            }}
          >
            {result.display_name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
