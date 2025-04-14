import React, { useContext } from "react";
import GeneralInfoForm from "../GeneralInfoForm";
import GuidingQuestionsForm from "../GuidingQuestionsForm";
import ResultsForm from "../ResultsForm";
import { AppraisalsContext, AppraisalsDispatchContext } from "../../appraisalContext";
import { validateGeneralInfo } from "../../utils/validation";

function AppraisalComponent() {

  const appraisalState = useContext(AppraisalsContext)
  const dispatch = useContext(AppraisalsDispatchContext)

  const { step } = appraisalState;

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    
    if (!validateGeneralInfo(data)) {
      return;
    }

    dispatch({ type: "POST_GENERAL_INFO", value: data });
  };

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
            onContinue={(e) => {
              handleGeneralInfoSubmit(e)
              dispatch({ type: "NEXT_STEP" })
            }}
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
