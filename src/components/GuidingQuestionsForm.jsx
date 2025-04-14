import React, { useContext, useEffect } from "react";
import genericImage from "../assets/generic-image.svg";
import InfoBar from "./infoBar/InfoBar";
import OptionButton from "./optionButton/OptionButton";
import ProgressBarComponent from "./progressBar/ProgressBarComponent";
import { AppraisalsContext, AppraisalsDispatchContext } from "../appraisalContext";
import { useFetchAppraisalData } from "../hooks/useFetchAppraisalData";
import Spinner from "react-bootstrap/Spinner";

const { VITE_API_BASE_URL } = import.meta.env;

function GuidingQuestionsForm({ onContinue }) {

  const { answers, currentIndex, questions, generalInfo } = useContext(AppraisalsContext)
  const dispatch = useContext(AppraisalsDispatchContext)

  const { fetchSquareMeterPrice, fetchQuestions } = useFetchAppraisalData(dispatch);
  const { type, stratum, status } = generalInfo;

  useEffect(() => {
    const questionsUrl = `${VITE_API_BASE_URL}/questions?type=${type}`
    const sqMeterPriceUrl = `${VITE_API_BASE_URL}/square-meter-prices?stratum=${stratum}&status=${status}`

    fetchQuestions(questionsUrl);
    fetchSquareMeterPrice(sqMeterPriceUrl);
  }, [])

  if (!questions || questions.length === 0) return (
    <div className="d-grid w-100">
      <Spinner
        as="span"
        animation="border"
        role="status"
        aria-hidden="true"
        style={{margin: '100px auto', height: '100px', width: '100px', fontSize: '2rem'}}
      />
      <p className="text-center mb-0 fs-5">Cargando preguntas...</p>
    </div>
  );

  const currentQuestion = questions[currentIndex]

  const { id, question, options, indicator, subgroup, parameter, explanation } = currentQuestion;

  const questionsLength = questions.length;
  const selectedAnswer = answers[currentIndex];

  return (
    <div className="d-grid w-100">
      <ProgressBarComponent
        questionId={id}
        questionsLength={questionsLength}
      />
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
                currentIndex={currentIndex}
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
            <button type="submit" className="btn btn-secondary col-12 col-md-3">
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
