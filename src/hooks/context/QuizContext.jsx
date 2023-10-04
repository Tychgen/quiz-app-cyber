import { createContext, useContext, useState, useEffect } from 'react';

export const QuizContext = createContext(null);

export const useQuizContext = () => {
  return useContext(QuizContext);
};


export const QuizContextProvider = ({ children }) => {
    const contextValues = {
       
      };
    
      return (
        <QuizContext.Provider value={contextValues}>
          {children}
        </QuizContext.Provider>
      );
    };
    