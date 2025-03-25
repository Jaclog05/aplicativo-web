import React from "react";
import ThumbUpIcon from "../../assets/thumb-up-icon.svg";
import ThumbDownIcon from "../../assets/thumb-down-icon.svg";

function OptionButton({ option, value, onSelect, isSelected }) {
  function showIcon(option) {
    if (option == "Si" || option == "Bueno" || option == "Es agradable") {
      return (
        <img src={ThumbUpIcon} alt="thumb-up-icon" width="50" />
      );
    } else if (option == "No" || option == "Malo" || option == "No me agrada") {
      return (
        <img
          src={ThumbDownIcon}
          alt="thumb-down-icon"
          width="50"
        />
      );
    } else {
      return;
    }
  }
  return (
    <div key="option" className="flex-md-fill mb-2">
      <button
        className={`d-flex flex-column align-items-center justify-content-center gap-2 btn w-100 py-3 ${
          isSelected ? "btn-primary" : "btn-secondary"
        }`}
        style={{ minHeight: "138px" }}
        type="button"
        key={option}
        value={value}
        onClick={() => onSelect(value)}
      >
        {showIcon(option)}
        {option}
      </button>
    </div>
  );
}

export default OptionButton;
