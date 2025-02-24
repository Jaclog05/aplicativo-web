import React from 'react'
import styles from './appraisal/AppraisalComponent.module.css'
import genericImage from '../assets/generic-image.svg'
import InfoBar from './infoBar/InfoBar';
import OptionButton from './optionButton/OptionButton';
import ProgressBarComponent from './progressBar/progressBarComponent';

function GuidingQuestionsForm({
  dispatch,
  onContinue,
  currentIndex,
  currentQuestion,
  questionsLength,
  answers
}) {

  const {id, question, options, indicator, subgroup, parameter, explanation} = currentQuestion;
  const selectedAnswer = answers[currentIndex];

  return (
    <div>
      <ProgressBarComponent questionId={id} questionsLength={questionsLength}/>
      <InfoBar
        indicator={indicator}
        subgroup={subgroup}
        parameter={parameter}
        explanation={explanation}
      />
      <form className={styles.formGuidingQuestions} onSubmit={onContinue}>
        <div className={styles.question}>
          <p className={styles.questionText}>
            {id}. {question}
          </p>
          <div className={styles.optionsWrapper}>
            {Object.entries(options).map(([option, value]) => (
              <OptionButton
                key={option}
                option={option}
                value={value}
                isSelected={selectedAnswer === value}
                onSelect={(value) => dispatch({ type: 'SET_ANSWER', index: currentIndex, answer: value })}
              />
            ))}
          </div>
        </div>

        <img src={genericImage} alt="generic Image" className={styles.genericImage}/>

        <div className={styles.bottom}>
          <div>
            {
              Object.keys(answers).length === questionsLength ?
              <input
                type="submit"
                value="Calcular Avalúo"
                className={styles.submit}
              /> :
              <button
                type='button'
                onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                disabled={answers[currentIndex] === undefined}
                className={styles.navigationButtons}
              >
                Siguiente
              </button>
            }
          </div>
        </div>
      </form>
    </div>
  )
}

export default GuidingQuestionsForm