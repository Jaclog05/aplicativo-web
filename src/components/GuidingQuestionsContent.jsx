import React, { useContext, useState, useEffect, useMemo } from 'react';
import genericImage from '../assets/generic-image.svg';
import ProgressBarComponent from './progressBar/ProgressBarComponent';
import InfoBar from './infoBar/InfoBar';
import OptionButton from './optionButton/OptionButton';
import { AppraisalsContext, AppraisalsDispatchContext } from '../appraisalContext';
import { use } from 'react';

function GuidingQuestionsContent() {

  const { answers, currentIndex, questions } = useContext(AppraisalsContext);
  const dispatch = useContext(AppraisalsDispatchContext);
  const [currentImage, setCurrentImage] = useState(genericImage);

  const currentQuestion = useMemo(() => {
    return questions[currentIndex];
  }, [questions, currentIndex]);

  const { id, question, options, parameterType, imageId } = currentQuestion;

  const questionsLength = questions.length;
  const selectedAnswer = answers[currentIndex]?.value;

  const isLastQuestion = currentIndex === questionsLength - 1;
  const allAnswered = Object.keys(answers).length === questionsLength

  const showCalculateButton = isLastQuestion && allAnswered;
  const showNextButton = !showCalculateButton;

  const useFlex = Object.entries(options).length < 4;

  useEffect(() => {
    const imagePath = `/images/guiding_question_image_${imageId}.webp`;

    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setCurrentImage(imagePath);
    };

    img.onerror = () => {
      setCurrentImage(genericImage);
    };

  }, [imageId]);

  useEffect(() => {
    console.log('Context actualizado:', {
      currentIndex,
      totalQuestions: questions.length,
      currentQuestion: questions[currentIndex]?.question,
    });
  }, [currentIndex, questions]);

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
        <div className="col-md-8 d-flex flex-column justify-content-start gap-2 text-black">
          <p className="h5 p-2">
            {id}. {question}
          </p>
          <div className={`row-12 ${useFlex ? 'd-md-flex' : ''} gap-2 px-3`}>
            {Object.entries(options).map(([option, value]) => (
              <OptionButton
                key={option}
                option={option}
                value={value}
                parameterType={parameterType}
                isSelected={selectedAnswer === value}
                currentIndex={currentIndex}
                paramName={currentQuestion.parameterPlusTitle || currentQuestion.parameter}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center my-3 my-md-0">
          <img
            src={currentImage}
            alt={`Ilustración para la pregunta ${imageId}`}
            className="img-fluid border border-3 border-secondary rounded-3"
            style={{ maxWidth: "250px" }}
            onError={(e) => {
              e.target.src = genericImage
            }}
          />

          <div className="m-2 d-flex gap-2 flex-md-row flex-column" style={{width: "250px"}}>
            <button
              type="button"
              className="btn btn-light flex-fill"
              onClick={() => dispatch({ type: "PREV_QUESTION" })}
              disabled={currentIndex === 0}
            >
              Anterior
            </button>
            {showCalculateButton && (
              <button type="submit" className="btn btn-secondary">
                Calcular Avalúo
              </button>
            )}
            {showNextButton && (
              <button
                type="button"
                className="btn btn-light flex-fill"
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                disabled={selectedAnswer === undefined}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>

      </form>
    </>
  )
}

export default GuidingQuestionsContent