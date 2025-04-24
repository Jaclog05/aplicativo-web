import React, { useContext } from "react";
import SpinnerLoader from "./SpinnerLoader";
import GuidingQuestionsContent from "./GuidingQuestionsContent";
import { AppraisalsContext } from "../appraisalContext";
import { useInitializeGuidingQuestions } from "../hooks/useInitializeGuidingQuestions";

function GuidingQuestionsForm() {

  const { questions } = useContext(AppraisalsContext)

  useInitializeGuidingQuestions();

  const loading = !questions || questions.length === 0;

  return (
    <div className="d-grid w-100">
      {
        loading ?
          <SpinnerLoader /> :
          <GuidingQuestionsContent />
      }
    </div>
  );
}

export default GuidingQuestionsForm;
