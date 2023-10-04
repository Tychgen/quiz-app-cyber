import { useContext } from "react";
import { QuizContext } from "../../hooks/context/QuizContext";

const Question = () => {
  const {
    currentQuestion,
    userAnswers,
    showAnswers,
    questions,
    handleAnswerClick
  } = useContext(QuizContext);

  const question = questions[currentQuestion];

  

  return (
    <>
      <div className='question'>
        <span>{question.questionText}</span>
      </div>
      <div className='option-list'>
        {question.answerOptions.map((answer, index) => {
          const isSelected = userAnswers[currentQuestion] === answer;
          const isCorrect = question.correctAnswer === answer;
          const isIncorrect = isSelected && !isCorrect;

          return (
            <div
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`option disabled ${
                showAnswers
                  ? isCorrect
                    ? 'correct'
                    : isSelected
                    ? 'incorrect'
                    : ''
                  : isSelected
                  ? 'highlighted'
                  : ''
              }`}
            >
              {answer}
              <span></span>
              {(isCorrect || isIncorrect) && showAnswers && (
                <div className={`icon ${isCorrect ? 'tick' : 'wrong'}`}>
                  <i className={`fas fa-${isCorrect ? 'check' : 'times'}`}></i>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Question;
