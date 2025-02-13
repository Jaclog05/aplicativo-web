import React, { useEffect } from 'react'
import styles from '../appraisal/AppraisalComponent.module.css'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import genericImage from '../../assets/generic-image.svg'
import { useState } from 'react'
import { questions } from '../../info_objects/questions'

function AppraisalComponent() {
  const [step, setStep] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  function handleSubmitGeneralInfo(e){
    e.preventDefault()
    setStep(prevState => prevState + 1)
  }

  function handleNewAppraisal() {
    setStep(1)
    setCurrentIndex(0)
  }

  function handleQuestionsNavigation(e, direction) {
    e.preventDefault();
    if(direction === 'previous'){
      setCurrentIndex(prev => prev - 1)
    } else if (direction === 'next' && currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  return (
    <div id='appraisal_section' className={styles.appraisalSection}>
      <div className={styles.appraisalHeader}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
        <p className={styles.appraisalComponentTitle}>
          Paso {step}: {step === 1 ? 'Información general del inmueble' : step === 2 ? 'Preguntas orientadoras' : 'Obten un precio estimado'}
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
                <p className={styles.questionText}>
                  {currentQuestion.id}. {currentQuestion.question}
                </p>
                <div className={styles.optionsWrapper}>
                  {Object.entries(currentQuestion.options).map(([option, value]) => (
                    <button key={option} className={styles.options} value={value}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <img src={genericImage} alt="generic Image" className={styles.genericImage}/>

              <div className={styles.bottom}>
                <div>
                  <button
                    onClick={(e) => handleQuestionsNavigation(e, "previous")}
                    disabled={currentIndex === 0}
                    className={styles.navigationButtons}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={(e) => handleQuestionsNavigation(e, "next")}
                    disabled={currentIndex === questions.length - 1}
                    className={styles.navigationButtons}
                  >
                    Siguiente
                  </button>
                </div>
                <p>
                  Pregunta {currentQuestion.id} de {questions.length}
                </p>
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
              <button onClick={handleNewAppraisal} className={styles.submit}>Nuevo Avalúo</button>
            </form>
          </>
        }
      </div>
    </div>
  )
}

export default AppraisalComponent