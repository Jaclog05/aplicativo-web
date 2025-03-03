import React from 'react'
import styles from './appraisal/AppraisalComponent.module.css'

function ResultsForm({onReset, appraisal, address}) {
  return (
    <form className={styles.formResults}>
      <p className={styles.resultsDescription}>
        El precio de venta para la propiedad ubicada en<br/>
        {address}<br/>
        tiene un precio estimado de<br/>
      </p>
      <p className={styles.appraisalResult}>$ {appraisal} COP</p>
      <button className={styles.paperButton}>Descargar Informe</button>
      <button onClick={onReset} className={styles.submit}>Nuevo Avalúo</button>
    </form>
  )
}

export default ResultsForm