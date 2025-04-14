import React, { useEffect, useContext } from "react";
import GeneralInfoForm from "../GeneralInfoForm";
import GuidingQuestionsForm from "../GuidingQuestionsForm";
import ResultsForm from "../ResultsForm";
import { AppraisalsContext, AppraisalsDispatchContext } from "../../appraisalContext";
import { useFetchAppraisalData } from "../../hooks/useFetchAppraisalData";

const { VITE_API_BASE_URL } = import.meta.env;

function AppraisalComponent() {

  const appraisalState = useContext(AppraisalsContext)
  const dispatch = useContext(AppraisalsDispatchContext)

  const { step, questions } = appraisalState;
  const { fetchSquareMeterPrice, fetchQuestions } = useFetchAppraisalData(dispatch);

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
    const questionsUrl = `${VITE_API_BASE_URL}/questions?type=${type}`
    const sqMeterPriceUrl = `${VITE_API_BASE_URL}/square-meter-prices?stratum=${stratum}&status=${status}`

    fetchQuestions(questionsUrl);
    fetchSquareMeterPrice(sqMeterPriceUrl);
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
            onContinue={handleGeneralInfoSubmit}
          />
        )}
        {step == 2 && (
          <GuidingQuestionsForm
            onContinue={() => {
              dispatch({ type: "SET_APPRAISAL" });
              dispatch({ type: "NEXT_STEP" });
            }}
          />
        )}
        {step == 3 && (
          <ResultsForm
            onReset={() => dispatch({ type: "RESET" })}
          />
        )}
      </div>
    </div>
  );
}

export default AppraisalComponent;
