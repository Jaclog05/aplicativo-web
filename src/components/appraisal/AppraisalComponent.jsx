import React, { useState, useReducer, useEffect } from 'react'
import styles from '../appraisal/AppraisalComponent.module.css'
import avaluoLogo from '../../assets/avaluo-icon.svg'
import GeneralInfoForm from '../GeneralInfoForm'
import GuidingQuestionsForm from '../GuidingQuestionsForm'
import ResultsForm from '../ResultsForm'

function AppraisalComponent() {

  const initialState = {
    step: 1,
    currentIndex: 0,
    answers: {},
    generalInfo: {},
    questions: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false)
  const { step, currentIndex, answers, questions } = state;

  function reducer(state, action) {
    switch(action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'SET_QUESTIONS':
        return { ...state, questions: action.value }
      case 'NEXT_QUESTION':
        return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1) };
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

  const fetchQuestions = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const questions = await res.json();
      dispatch({ type: 'SET_QUESTIONS', value: questions })
    } catch (error) {
      console.error("Error al obtener preguntas", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target)
    )
    const status = data["status"]

    dispatch({ type: 'POST_GENERAL_INFO', value: data})
    const url = status === "Unifamiliar"
    ? "http://localhost:4000/questions?type=Unifamiliar"
    : "http://localhost:4000/questions"
    fetchQuestions(url)
  }

  useEffect(() => {
    if (step === 1 && questions.length > 0) {
      dispatch({ type: 'NEXT_STEP' });
    }
  }, [questions, step]);

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
            onContinue={handleGeneralInfoSubmit} isLoading={isLoading}
          /> }
        { step == 2 &&
          <GuidingQuestionsForm
            dispatch={dispatch}
            answers={answers}
            currentIndex={currentIndex}
            currentQuestion={questions[currentIndex]}
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