import React from 'react';
import Menu from './Menu';
import MainContent from './MainContent';
import { PracticeProvider } from './practica_5/PracticeContext'; // Asegúrate de importar el contexto
import './App.css';



function App() {
  return (
    <PracticeProvider>
      <div className="App">
        <Menu />
        <MainContent />
      </div>
    </PracticeProvider>
  );
}
export default App;

