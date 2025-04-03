import React from "react";
import ThumbUpIcon from "../../assets/thumb-up-icon.svg";
import ThumbDownIcon from "../../assets/thumb-down-icon.svg";

function OptionButton({ option, value, onSelect, isSelected }) {
  function showIcon(option) {
    if (option == "Si" || option == "Bueno" || option == "Es agradable") {
      return (
        <i
          className="bi bi-hand-thumbs-up-fill"
          style={{fontSize: '3rem', color: isSelected? "#ddeedf" : "#5c715e"}}
        ></i>
      );
    } else if (option == "No" || option == "Malo" || option == "No me agrada") {
      return (
        <i
          className="bi bi-hand-thumbs-down-fill"
          style={{fontSize: '3rem', color: isSelected ? "#ddeedf" :"#5c715e"}}
        ></i>
      );
    } else {
      return (
        <i
          className="bi bi-emoji-neutral-fill"
          style={{fontSize: '3rem', color: isSelected ? "#ddeedf" :"#5c715e"}}
        ></i>
      );
    }
  }
  return (
    <div key="option" className="flex-md-fill mb-2">
      <button
        className={`shadow d-flex flex-column align-items-center justify-content-center gap-2 btn w-100 py-3 fw-bold
          ${isSelected ? "btn-secondary" : "btn-success"} ${isSelected ? "text-success" : "text-secondary"}`
        }
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
