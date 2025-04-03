import React from "react";
import genericImage from "../assets/generic-image.svg";
import InfoBar from "./infoBar/InfoBar";
import OptionButton from "./optionButton/OptionButton";
import ProgressBarComponent from "./progressBar/ProgressBarComponent";

function GuidingQuestionsForm({
  dispatch,
  onContinue,
  currentIndex,
  currentQuestion,
  questionsLength,
  answers,
}) {
  const { id, question, options, indicator, subgroup, parameter, explanation } =
    currentQuestion;
  const selectedAnswer = answers[currentIndex];

  return (
    <div className="d-grid w-100">
      <ProgressBarComponent questionId={id} questionsLength={questionsLength} />
      <InfoBar
        indicator={indicator}
        subgroup={subgroup}
        parameter={parameter}
        explanation={explanation}
      />
      <form
        className="my-4 row"
        onSubmit={onContinue}
      >
        <div className="col-md-8 d-flex flex-column justify-content-center gap-2 text-black">
          <p className="h5 p-2">
            {id}. {question}
          </p>
          <div className="row-12 d-md-flex gap-2 px-3">
            {Object.entries(options).map(([option, value]) => (
              <OptionButton
                key={option}
                option={option}
                value={value}
                isSelected={selectedAnswer === value}
                onSelect={(value) =>
                  dispatch({
                    type: "SET_ANSWER",
                    index: currentIndex,
                    answer: value,
                  })
                }
              />
            ))}
          </div>
        </div>

        <div className="text-center my-3 col-md-4">
          <img
            src={genericImage}
            alt="generic Image"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div className="col-md-12 d-flex justify-content-md-end p-2">
          {Object.keys(answers).length === questionsLength ? (
            <button type="submit" className="btn btn-primary col-12 col-md-3">
              Calcular Avalúo
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary col-12 col-md-3"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              disabled={answers[currentIndex] === undefined}
            >
              Siguiente
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default GuidingQuestionsForm;
