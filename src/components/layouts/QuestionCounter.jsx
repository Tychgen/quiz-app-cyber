import React, { useContext } from 'react';
import { QuizContext } from '../../hooks/context/QuizContext';

const QuestionCounter = () => {
  const {currentQuestion, questions} =  useContext(QuizContext)
  return (
    <div>
      {`${currentQuestion + 1} of ${questions.length} Questions`}
    </div>
  );
};

export default QuestionCounter;
