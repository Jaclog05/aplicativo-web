import React from "react";

function InfoStep({ title, description, explanation, iconClass }) {
  return (
    <div
      className="col-12 col-md-4 d-flex flex-column p-3 rounded-3 shadow bg-success text-dark h-100"
      style={{ maxWidth: "350px", minHeight: "210px" }}
    >
      <div className="d-flex flex-grow-2 align-items-center">
        <i className={`me-3 ${iconClass}`} style={{ fontSize: "3rem" }}></i>
        <div>
          <h4 className="fw-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center p-3 flex-grow-1 text-center">
        {explanation}
      </div>
    </div>
  );
}

export default InfoStep;
