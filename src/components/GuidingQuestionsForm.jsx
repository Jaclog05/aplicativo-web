import React from 'react'
import styles from './appraisal/AppraisalComponent.module.css'
import genericImage from '../assets/generic-image.svg'

function GuidingQuestionsForm({
  dispatch,
  onContinue,
  currentIndex,
  currentQuestion,
  questionsLength
}) {

  const {id, question, options} = currentQuestion;

  return (
    <form className={styles.formGuidingQuestions} onSubmit={onContinue}>
      <div className={styles.question}>
        <p className={styles.questionText}>
          {id}. {question}
        </p>
        <div className={styles.optionsWrapper}>
          {Object.entries(options).map(([option, value]) => (
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
            type='button'
            onClick={() => dispatch({ type: 'PREV_QUESTION' })}
            disabled={currentIndex === 0}
            className={styles.navigationButtons}
          >
            Anterior
          </button>
          <button
            type='button'
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
            disabled={currentIndex === questionsLength - 1}
            className={styles.navigationButtons}
          >
            Siguiente
          </button>
        </div>
        <p>
          Pregunta {id} de {questionsLength}
        </p>
      </div>
      <input type="submit" value="Continuar" className={styles.submit}/>
    </form>
  )
}

export default GuidingQuestionsForm