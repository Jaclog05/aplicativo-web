import React from 'react'
import styles from '../appraisal/AppraisalComponent.module.css'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import genericImage from '../../assets/generic-image.svg'
import { useState } from 'react'

function AppraisalComponent() {
  const [step, setStep] = useState(1);

  function handleSubmitGeneralInfo(e){
    e.preventDefault()
    setStep(prevState => prevState + 1)
  }

  return (
    <div className={styles.appraisalSection}>
      <div className={styles.appraisalHeader}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
        <p className={styles.appraisalComponentTitle}>
          Paso {step}: Información general del Inmueble
        </p>
      </div>
      <div className={styles.appraisalBody}>
        {
          step == 1 ? <>
            <form className={styles.formGeneralInfo} onSubmit={handleSubmitGeneralInfo}>
              <input type="text" placeholder='Direccion del inmueble' className={styles.addr} />
              <input type="text" placeholder='Estrato' className={styles.strat} />
              <input type="text" placeholder='Localidad' className={styles.loc} />
              <input type="text" placeholder='Area (m2)' className={styles.area} />
              <input type="text" placeholder='Precio' className={styles.price} />
              <div className={styles.mapSection}>
                Mapa Interactivo
              </div>
              <input type="submit" value="Continuar" className={styles.submit}/>
            </form>
          </> :
          step == 2 ? <>
            <form className={styles.formGuidingQuestions} onSubmit={handleSubmitGeneralInfo}>
              <div className={styles.question}>
                <p className={styles.questionText}>{`
                  19.   ¿Cómo percibes la iluminación natural en las zonas comunes dentro de la vivienda?
                  (Sala, comedor, estudio, cocina, entre otros)`
                }</p>
                <div className={styles.optionsWrapper}>
                  <button className={styles.options}>Bueno</button>
                  <button className={styles.options}>Regular</button>
                  <button className={styles.options}>Malo</button>
                </div>
              </div>
              <img src={genericImage} alt="generic Image" className={styles.genericImage}/>
              <div className={styles.bottom}>
                <div>
                  <button>Anterior</button>
                  <button>Siguiente</button>
                </div>
                <p>Pregunta 19 de 35</p>
              </div>
              <input type="submit" value="Continuar" className={styles.submit}/>
            </form>
          </> : <>
            <form className={styles.formResults} onSubmit={handleSubmitGeneralInfo}>
              <p className={styles.resultsDescription}>
                El precio de venta para la propiedad ubicada en<br/>
                Cl. 90a #70-107, Villa Carolina<br/>
                tiene un precio estimado de<br/>
              </p>
              <p className={styles.appraisalResult}>$ 236.000.000 COP</p>
              <button className={styles.paperButton}>Descargar Informe</button>
            </form>
          </>
        }
      </div>
    </div>
  )
}

export default AppraisalComponent