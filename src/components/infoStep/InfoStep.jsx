import React from 'react'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import styles from './InfoStep.module.css'

function InfoStep({icon, title, description, explanation}) {
  return (
    <div className={styles.wrapper}>
      <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
      <div className={styles.titleArea}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.explanation}>
        {explanation}
      </div>
    </div>
  )
}

export default InfoStep