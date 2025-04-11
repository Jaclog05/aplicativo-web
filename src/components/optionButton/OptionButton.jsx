import React, {useContext} from "react";
import { AppraisalsDispatchContext } from "../../appraisalContext";

function OptionButton({ option, value, currentIndex, isSelected }) {

  const dispatch = useContext(AppraisalsDispatchContext);

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
        onClick={() => dispatch({ type: "SET_ANSWER", index: currentIndex, answer: value })}
      >
        {showIcon(option)}
        {option}
      </button>
    </div>
  );
}

export default OptionButton;
