import React, { useState, useReducer } from 'react'
import styles from '../appraisal/AppraisalComponent.module.css'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import { questionsArray } from '../../info_objects/questionsMultiFamilies'
import GeneralInfoForm from '../GeneralInfoForm'
import GuidingQuestionsForm from '../GuidingQuestionsForm'
import ResultsForm from '../ResultsForm'

function AppraisalComponent() {

  const questions = questionsArray.slice(0,4) //Corregir

  function reducer(state, action) {
    switch(action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'PREV_QUESTION':
        return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };
      case 'NEXT_QUESTION':
        return { ...state, currentIndex: Math.min(state.currentIndex + 1, questions.length - 1) };
      case 'POST_GENERAL_INFO':
        return {
          ...state,
          generalInfo: action.value
        }
      case 'SET_ANSWER':
        return {
          ...state,
          answers: { ...state.answers, [action.index]: action.answer }
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const initialState = { step: 1, currentIndex: 0, answers: {}, generalInfo: {} };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, currentIndex, answers } = state;
  const currentQuestion = questions[currentIndex];


  return (
    <div id='appraisal_section' className={styles.appraisalSection}>
      <div className={styles.appraisalHeader}>
        <img src={avaluoLogo} alt="avaluo Logo" className={styles.imgIcon}/>
        <p className={styles.appraisalComponentTitle}>
          Paso {step}: {[
            'Información general del inmueble',
            'Preguntas orientadoras',
            'Obten un precio estimado']
            [step - 1]
          }
        </p>
      </div>
      <div className={styles.appraisalBody}>
        { step == 1 &&
          <GeneralInfoForm
            onContinue={(e) => {
              e.preventDefault()
              const data = Object.fromEntries(
                new FormData(e.target)
              )
              dispatch({ type: 'POST_GENERAL_INFO', value: data})
              dispatch({ type: 'NEXT_STEP'})
            }}
          /> }
        { step == 2 &&
          <GuidingQuestionsForm
            dispatch={dispatch}
            answers={answers}
            currentIndex={currentIndex}
            currentQuestion={currentQuestion}
            questionsLength={questions.length}
            onContinue={() => dispatch({ type: 'NEXT_STEP' })}
          />
        }
        { step == 3 &&
          <ResultsForm
            onReset={() => dispatch({ type: 'RESET' })}
          />
        }
      </div>
    </div>
  )
}

export default AppraisalComponent