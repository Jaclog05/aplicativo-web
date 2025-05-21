import React from "react";
import InfoIcon from "../../assets/info-icon.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function InfoBar({ currentQuestion }) {

  const { indicator, subgroup, parameter, explanation, parameterType } = currentQuestion;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip-2" {...props}>
      {explanation}
    </Tooltip>
  );

  const renderPlusIcon = (props) => (
    <Tooltip id="button-tooltip-2" {...props}>
      Este es un parametro Plus!
    </Tooltip>
  )

  return (
    <div className="d-md-flex justify-content-md-between col-12 col-md-8 text-center gap-2">
      <div className="flex-fill text-white justify-content-center align-items-center bg-secondary mb-1 rounded-4 px-2">
        {indicator}
      </div>
      <div className="flex-fill text-white justify-content-center align-items-center bg-secondary mb-1 rounded-4 px-2">
        {subgroup}
      </div>
      <div className="flex-fill d-flex text-white justify-content-center align-items-center bg-secondary mb-1 rounded-4 px-2">
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
        {
          parameterType === "Plus" && (
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderPlusIcon}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EFB810" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </OverlayTrigger>
          )
        }
      </div>
    </div>
  );
}

export default InfoBar;
