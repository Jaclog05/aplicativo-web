import React from 'react'
import styles from './InfoBar.module.css'
import InfoIcon from '../../assets/info-icon.svg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function InfoBar({indicator, subgroup, parameter, explanaition}) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip-2" {...props}>
      {explanaition}
    </Tooltip>
  );

  return (
    <div className={styles.wrapper}>
      <div>{indicator}</div>
      <div>{subgroup}</div>
      <div>
        {parameter}
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <img src={InfoIcon} alt='info-icon' className={styles.icon} />
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default InfoBar