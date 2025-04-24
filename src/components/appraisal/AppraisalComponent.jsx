import React, { useContext } from "react";
import GeneralInfoForm from "../GeneralInfoForm";
import GuidingQuestionsForm from "../GuidingQuestionsForm";
import ResultsForm from "../ResultsForm";
import { AppraisalsContext } from "../../appraisalContext";
import { STEPS_CONFIG } from "../../constants/stepsConfig";

function AppraisalComponent() {

  const appraisalState = useContext(AppraisalsContext)

  const { step } = appraisalState;
  const currentStep = STEPS_CONFIG[step - 1];

  return (
    <div id="appraisal_section" className="px-5 pb-4 mb-md-5 d-flex flex-column bg-primary text-dark">
      <div className="d-flex justify-content-start align-items-center py-3 gap-2">
        <i className={currentStep.icon} style={{ fontSize: "3rem" }} />
        <h3 className="py-2 mb-0 fw-bold">
          Paso {step}: {currentStep.title}
        </h3>
      </div>
      <hr className="mt-0 text-secondary"/>
      <div className="py-2">
        { step == 1 && <GeneralInfoForm /> }
        { step == 2 && <GuidingQuestionsForm /> }
        { step == 3 && <ResultsForm /> }
      </div>
    </div>
  );
}

export default AppraisalComponent;
