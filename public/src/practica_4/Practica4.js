
import React, { useState, useRef } from 'react';
import './Practica4.css';

export default function App() {
  const [input1, setInput1] = useState(Math.round(Math.random())); // Estado para input1
  const [checkboxValue, setCheckboxValue] = useState(0); // Estado para el checkbox
  const [selectedGate, setSelectedGate] = useState('or'); // Estado para la compuerta lógica
  const [output, setOutput] = useState(0); // Estado para la salida
  const outputRef = useRef(); // Referencia para el elemento output

  // Manejar el cambio en el input1
  const handleInput1Change = (event) => {
    const newValue = parseInt(event.target.value);
    setInput1(newValue === 0 || newValue === 1 ? newValue : 0);
  };

  // Manejar el cambio en el checkbox
  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked ? 1 : 0);
  };

  // Manejar el cambio en el select
  const handleSelectChange = (event) => {
    setSelectedGate(event.target.value);
  };

  const handleGetOutputValue = () => {
    const outputElement = outputRef.current;
    const outputValue = outputElement.innerText;
    alert(`Valor de la salida: ${outputValue}`);
  };

  // Calcular la salida en función de la compuerta lógica seleccionada
  const calculateOutput = () => {
    let result = 0;
    switch (selectedGate) {
        case 'or':
            result = input1 || checkboxValue;
            break;
        case 'and':
            result = input1 && checkboxValue;
            break;
        case 'nand':
            result = input1 && checkboxValue ? 0 : 1;
            break;
        case 'nor':
            result = input1 ^ checkboxValue;
            break;
        case 'xor':
            result = input1 === checkboxValue ? 0 : 1;
            break;
        default:
            result = 0;

    }
    setOutput(result);
};


  // Llamar a la función de cálculo cuando cambie input1, el checkbox o la compuerta lógica
  React.useEffect(() => {
    calculateOutput();
  }, [input1, checkboxValue, selectedGate]);

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <input
          id="input1"
          type="number"
          value={input1}
          onChange={handleInput1Change}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checkboxValue === 1}
            onChange={handleCheckboxChange}
          />{' '}
          Entrada 2
        </label>
      </div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica</label>
        <select id="selectGate" value={selectedGate} onChange={handleSelectChange}>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
        <span className= 'Salida' ref={outputRef}>Salida: {output}</span>
        <button onClick={handleGetOutputValue}>  Obtener Valor de la Salida  </button>
      </div>
    </div>
  );
}


