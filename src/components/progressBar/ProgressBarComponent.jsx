import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarComponent({ questionId, questionsLength }) {
  const now = Math.ceil((questionId / questionsLength) * 100);
  return (
    <ProgressBar
      variant="secondary"
      className="rounded-4 my-2"
      now={now}
      label={`${now}%`}
      style={{ height: "20px" }}
    />
  );
}

export default ProgressBarComponent;
