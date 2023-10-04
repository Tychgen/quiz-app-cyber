import { createContext, useContext, useState, useEffect } from 'react';

export const QuizContext = createContext(null);

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const questions = [
    {
      id: 1,
      questionText: 'Question 1: What is the data type for whole numbers in TypeScript?',
      answerOptions: [
        'Number',
        'Integer',
        'Float',
        'Any',
      ],
      correctAnswer: 'Number',
      answered: false,
    },
    {
      id: 2,
      questionText: 'Question 2: What keyword is used to declare a variable in TypeScript?',
      answerOptions: [
        'let',
        'var',
        'const',
        'declare',
      ],
      correctAnswer: 'let',
      answered: false,
    },
    {
      id: 3,
      questionText: 'Question 3: Which TypeScript feature allows you to define a type that can be a combination of multiple types?',
      answerOptions: [
        'Type union',
        'Type intersection',
        'Type alias',
        'Type inference',
      ],
      correctAnswer: 'Type union',
      answered: false,
    },
    {
      id: 4,
      questionText: 'Question 4: What is a TypeScript interface?',
      answerOptions: [
        'A class in TypeScript',
        'A structure for organizing data',
        'A way to declare an object',
        'A built-in TypeScript function',
      ],
      correctAnswer: 'A way to declare an object',
      answered: false,
    },
    {
      id: 5,
      questionText: 'Question 5: What is TypeScript used for primarily?',
      answerOptions: [
        'Creating databases',
        'Writing operating systems',
        'Building web applications',
        'Controlling hardware devices',
      ],
      correctAnswer: 'Building web applications',
      answered: false,
    },
];


export const QuizContextProvider = ({ children }) => {
    const contextValues = {
       
      };
    
      return (
        <QuizContext.Provider value={contextValues}>
          {children}
        </QuizContext.Provider>
      );
    };
    