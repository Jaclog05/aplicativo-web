import React, { useContext } from "react";
import { AppraisalsDispatchContext } from "../../appraisalContext";

function OptionButton({
  option,
  value,
  currentIndex,
  parameterType,
  isSelected,
  paramName,
}) {
  const dispatch = useContext(AppraisalsDispatchContext);

  function showIcon(option) {
    if (
      option == "Si" ||
      option == "Bueno" ||
      option == "Buena" ||
      option == "Es agradable" ||
      option == "Bajo"||
      option == "Todos"||
      option == "Baldosas / Cerámica"
    ) {
      return (
        <i
          className="bi bi-hand-thumbs-up-fill"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (
      option == "No" ||
      option == "Malo" ||
      option == "Deficiente" ||
      option == "No me agrada" ||
      option == "Alto"||
      option == "Algunos" ||
      option == "Sin acabado (piso en cemento o plantilla)"
    ) {
      return (
        <i
          className="bi bi-hand-thumbs-down-fill"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (
      option == "Regular" ||
      option == "No es agradable ni desagradable" ||
      option == "A veces" ||
      option == "Medio"||
      option == "No tiene ventilación"
    ) {
      return (
        <i
          className="bi bi-emoji-neutral-fill"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (option == "Natural") {
      return (
        <i
          className="bi bi-sun-fill"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (option == "Artificial") {
      return (
        <i
          className="bi bi-lightbulb-fill"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (option == "Estuco y pintura") {
      return (
        <i
          className="bi bi-paint-bucket"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (option == "Ladrillo o bloque") {
      return (
        <i
          className="bi bi-bricks"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else if (option == "Concreto/mortero a la vista") {
      return (
        <i
          className="bi bi-hammer"
          style={{
            fontSize: "3rem",
            color: isSelected ? "#ddeedf" : "#5c715e",
          }}
        ></i>
      );
    } else {
      return <i></i>;
    }
  }
  return (
    <div key="option" className="flex-md-fill mb-2">
      <button
        className={`shadow d-flex flex-column align-items-center justify-content-center gap-2 btn w-100 py-3 fw-bold
          ${isSelected ? "btn-secondary" : "btn-success"} ${
          isSelected ? "text-success" : "text-secondary"
        }`}
        style={{ height: "100%", minWidth: "100px" }}
        type="button"
        key={option}
        value={value}
        onClick={() =>
          dispatch({
            type: "SET_ANSWER",
            index: currentIndex,
            value: value,
            parameterType: parameterType,
            paramName: paramName,
          })
        }
      >
        {showIcon(option)}
        {option}
      </button>
    </div>
  );
}

export default OptionButton;
