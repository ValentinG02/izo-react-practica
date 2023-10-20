
import React from 'react';
import { usePracticeContext } from './practica_5/PracticeContext';
import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';
import Practica3 from './practica_3/Practica3';
import Practica4 from './practica_4/Practica4';

function MainContent() {
  const { selectedPractice } = usePracticeContext();

  return (
    <main>
            { selectedPractice === '#practica_1' && <Practica1 /> }
            { selectedPractice === '#practica_2' && <Practica2 /> }
            { selectedPractice === '#practica_3' && <Practica3 /> }
            { selectedPractice === '#practica_4' && <Practica4 /> }
        </main>
  );
}

export default MainContent;