import React, { useState, useReducer, useEffect } from "react";
import styles from "../appraisal/AppraisalComponent.module.css";
import avaluoLogo from "../../assets/avaluo-icon.svg";
import GeneralInfoForm from "../GeneralInfoForm";
import GuidingQuestionsForm from "../GuidingQuestionsForm";
import ResultsForm from "../ResultsForm";
import { appraisalReducer, initialState } from "../../appraisalReducer";

function AppraisalComponent() {
  const [state, dispatch] = useReducer(appraisalReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const {
    step,
    currentIndex,
    answers,
    questions,
    appraisal,
    generalInfo
  } = state;

  const fetchData = async (url, actionType) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: actionType,
        value: actionType === "SET_QUESTIONS" ? data.slice(0, 3) : data.price,
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
    const type = data["status"];
    const stratum = data["stratum"];

    dispatch({ type: "POST_GENERAL_INFO", value: data });
    const url = type === "Unifamiliar"
      ? "http://localhost:4000/questions?type=Unifamiliar"
      : "http://localhost:4000/questions";

    fetchData(url, 'SET_QUESTIONS');
    fetchData(
      `http://localhost:4000/square-meter-prices?stratum=${stratum}&status=nueva`, // Añadir campo para estado de vivienda
      'SET_SQUARE_METER_PRICE'
    );
  };

  useEffect(() => {
    if (step === 1 && questions.length > 0) {
      dispatch({ type: "NEXT_STEP" });
    }
  }, [questions, step]);

  return (
    <div id="appraisal_section" className={styles.appraisalSection}>
      <div className={styles.appraisalHeader}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon} />
        <p className={styles.appraisalComponentTitle}>
          Paso {step}:{" "}
          {
            [
              "Información general del inmueble",
              "Preguntas orientadoras",
              "Obten un precio estimado",
            ][step - 1]
          }
        </p>
      </div>
      <div className={styles.appraisalBody}>
        {step == 1 && (
          <GeneralInfoForm
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
            address={generalInfo.address}
          />
        )}
      </div>
    </div>
  );
}

export default AppraisalComponent;
