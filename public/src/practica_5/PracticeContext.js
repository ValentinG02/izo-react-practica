import React, { createContext, useContext, useState, useEffect } from 'react';

const PracticeContext = createContext();

export const usePracticeContext = () => {
  return useContext(PracticeContext);
};

export const PracticeProvider = ({ children }) => {
  const [selectedPractice, setSelectedPractice] = useState('Menu Principal');

  const selectPractice = (practice) => {
    setSelectedPractice(practice);
  };
  useEffect(() => {
    // Actualiza el título del documento cuando cambia la práctica seleccionada
    document.title = selectedPractice;
  }, [selectedPractice]);
  return (
    <PracticeContext.Provider value={{ selectedPractice, selectPractice }}>
      {children}
    </PracticeContext.Provider>
  );
};