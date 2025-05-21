import React, { useContext } from 'react';
import genericImage from '../assets/generic-image.svg';
import ProgressBarComponent from './progressBar/ProgressBarComponent';
import InfoBar from './infoBar/InfoBar';
import OptionButton from './optionButton/OptionButton';
import { AppraisalsContext, AppraisalsDispatchContext } from '../appraisalContext';

function GuidingQuestionsContent() {

  const { answers, currentIndex, questions } = useContext(AppraisalsContext);
  const dispatch = useContext(AppraisalsDispatchContext)

  const currentQuestion = questions[currentIndex]

  const { id, question, options, parameterType } = currentQuestion;

  const questionsLength = questions.length;
  const selectedAnswer = answers[currentIndex]?.value;

  const allAnswered = Object.keys(answers).length === questionsLength

  return (
    <>
      <ProgressBarComponent
        questionId={id}
        questionsLength={questionsLength}
      />
      <InfoBar
        currentQuestion={currentQuestion}
      />
      <form
        className="my-4 row"
        onSubmit={() => {
          dispatch({ type: "SET_APPRAISAL" });
          dispatch({ type: "NEXT_STEP" });
        }}
      >
        <div className="col-md-9 d-flex flex-column justify-content-center gap-2 text-black">
          <p className="h5 p-2">
            {id}. {question}
          </p>
          <div className="row-12 d-md-flex gap-2 px-3">
            {Object.entries(options).map(([option, value]) => (
              <OptionButton
                key={option}
                option={option}
                value={value}
                parameterType={parameterType}
                isSelected={selectedAnswer === value}
                currentIndex={currentIndex}
                paramName={currentQuestion.parameter}
              />
            ))}
          </div>
        </div>

        <div className="text-center my-3 col-md-3">
          <img
            src={genericImage}
            alt="generic Image"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>

        <div className="col-md-12 d-flex justify-content-md-end p-2">
          {allAnswered ?
            (
              <button type="submit" className="btn btn-secondary col-12 col-md-3">
                Calcular Avalúo
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary col-12 col-md-3"
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                disabled={selectedAnswer === undefined}
              >
                Siguiente
              </button>
            )
          }
        </div>
      </form>
    </>
  )
}

export default GuidingQuestionsContent