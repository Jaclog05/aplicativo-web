import React, { useState, useReducer, useEffect } from "react";
import GeneralInfoForm from "../GeneralInfoForm";
import GuidingQuestionsForm from "../GuidingQuestionsForm";
import ResultsForm from "../ResultsForm";
import { appraisalReducer, initialState } from "../../appraisalReducer";

function AppraisalComponent() {
  const { VITE_API_BASE_URL } = import.meta.env;
  const [state, dispatch] = useReducer(appraisalReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const {
    step,
    currentIndex,
    answers,
    questions,
    appraisal,
    generalInfo,
    squareMeterPrice,
    mapImageUrl
  } = state;

  const fetchData = async (url, actionType) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: actionType,
        value: actionType === "SET_QUESTIONS" ? data.slice(0, 3) : data[0].price,
      });
    } catch (error) {
      console.error(`Error al obtener ${actionType}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const type = data["type"];
    const stratum = data["stratum"];
    const status = data["status"];
    const area = parseInt(data.area, 10);
    const price = parseInt(data.price, 10);

    if (area < 30) {
      alert("El área debe ser al menos 30 m²");
      return;
    }
    
    if (price < 10000000) {
      alert("El precio debe ser al menos 10.000.000 COP");
      return;
    }

    dispatch({ type: "POST_GENERAL_INFO", value: data });
    const url = type === "unifamiliar"
      ? `${VITE_API_BASE_URL}/questions?type=Unifamiliar`
      : `${VITE_API_BASE_URL}/questions`;

    fetchData(url, 'SET_QUESTIONS');
    fetchData(
      `${VITE_API_BASE_URL}/square-meter-prices?stratum=${stratum}&status=${status}`,
      'SET_SQUARE_METER_PRICE'
    );
  };

  useEffect(() => {
    if (step === 1 && questions.length > 0) {
      dispatch({ type: "NEXT_STEP" });
    }
  }, [questions, step]);

  return (
    <div id="appraisal_section" className="px-5 pb-4 mb-md-5 d-flex flex-column bg-primary text-dark">
      <div className="d-flex justify-content-start align-items-center py-3 gap-2">
        <i
          className={
            [
              "bi bi-house-fill",
              "bi bi-patch-question-fill",
              "bi bi-currency-exchange"
            ][step - 1]
          }
          style={{ fontSize: "3rem" }}
        ></i>
        <h3 className="py-2 mb-0 fw-bold">
          Paso {step}:{" "}
          {
            [
              "Información general del inmueble",
              "Preguntas orientadoras",
              "Obten un precio estimado",
            ][step - 1]
          }
        </h3>
      </div>
      <hr className="mt-0 text-secondary"/>
      <div className="py-2">
        {step == 1 && (
          <GeneralInfoForm
            dispatch={dispatch}
            onContinue={handleGeneralInfoSubmit}
            isLoading={isLoading}
          />
        )}
        {step == 2 && (
          <GuidingQuestionsForm
            dispatch={dispatch}
            answers={answers}
            currentIndex={currentIndex}
            currentQuestion={questions[currentIndex]}
            questionsLength={questions.length}
            onContinue={() => {
              dispatch({ type: "SET_APPRAISAL" });
              dispatch({ type: "NEXT_STEP" });
            }}
          />
        )}
        {step == 3 && (
          <ResultsForm
            onReset={() => dispatch({ type: "RESET" })}
            appraisal={appraisal}
            generalInfo={generalInfo}
            sqMeterPrice={squareMeterPrice}
            mapImageUrl={mapImageUrl}
          />
        )}
      </div>
    </div>
  );
}

export default AppraisalComponent;
