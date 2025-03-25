import React from "react";
import InfoIcon from "../../assets/info-icon.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function InfoBar({ indicator, subgroup, parameter, explanation }) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip-2" {...props}>
      {explanation}
    </Tooltip>
  );

  return (
    <div className="d-md-flex justify-content-md-between col-12 col-md-8 text-center gap-2">
      <div className="flex-fill text-white justify-content-center align-items-center bg-success mb-1 rounded-4 px-2">
        {indicator}
      </div>
      <div className="flex-fill text-white justify-content-center align-items-center bg-success mb-1 rounded-4 px-2">
        {subgroup}
      </div>
      <div className="flex-fill d-flex text-white justify-content-center align-items-center bg-success mb-1 rounded-4 px-2">
        {parameter}
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <img
            src={InfoIcon}
            alt="info-icon"
            className="fill-white mx-1"
            width="20"
            height="20"
          />
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default InfoBar;
