import React from 'react';
import Question from './Question';
import { useContext } from 'react';
import { QuizContext } from '../../hooks/context/QuizContext';

const Result = () => {
  const { userAnswers, questions, showAnswers, currentQuestion, handleRestart, calculateScore } = useContext(QuizContext);
 
  const score =  calculateScore();

  return (
    <div className='question'>
      <h2>Answers:</h2>
      <div className='option-list'>
        <Question
          question={questions[currentQuestion]}
          userAnswer={userAnswers[currentQuestion]}
          showAnswers={showAnswers}
        />
      </div>
      <button onClick={handleRestart} className='restart'>Restart</button>
      <span className='score'>Score: {score}</span>
    </div>
  );
};

export default Result;
