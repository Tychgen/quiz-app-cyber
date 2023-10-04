import { useContext } from 'react';
import Question from '../components/layouts/Question';
import Result from '../components/layouts/Result';
import QuestionCounter from '../components/layouts/QuestionCounter';
import '../styles/quiz.css';
import { QuizContext } from '../hooks/context/QuizContext';



const Quiz = () => {
  const {
    currentQuestion,
    showAnswers,
    showResultsButton,
    handleShowAnswers,
    handleNext,
    handleBack,
    isAllQuestionsAnswered,
    questions
  } = useContext(QuizContext);


  return (
    <div className='quiz-box'>
      <header>
        <div className='title'>Quiz App</div>
        <div className='timer'>
          <div className='text'>Time left </div>
          <div className='sec'>10</div>
        </div>
        <div className='timeline'></div>
      </header>
      <section>
        {showAnswers ? <Result/> : <Question/>}
      </section>
      <footer>
        <div className='total-questions'>
          <QuestionCounter/>
        </div>
        {showResultsButton && !showAnswers && (
          <button
            onClick={handleShowAnswers}
            disabled={!isAllQuestionsAnswered}
            className='result'
          >
            Results
          </button>
        )}
        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNext} className='next'>
            Next
          </button>
        )}
        {currentQuestion > 0 && (
          <button onClick={handleBack} className='back'>
            Back
          </button>
        )}
      </footer>
    </div>
  );
};

export default Quiz;
