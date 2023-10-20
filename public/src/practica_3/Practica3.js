import React, { useState } from 'react';
import './Practica3.css';

export default function Practica3() {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setArray([...array, { text: inputValue, isText: true }]);
      setInputValue('');
    }
  };

  const handleDeleteClick = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleEditClick = (index) => {
    const editedText = prompt('Editar texto:', array[index].text);
    if (editedText !== null) {
      const newArray = [...array];
      newArray[index] = { text: editedText, isText: true };
      setArray(newArray);
    }
  };

  return (
    <div className="practica-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe algo..."
        className="input-field"
      />
      <button onClick={handleButtonClick} className="add-button">
        Agregar
      </button>
      <ul className="item-list">
        {array.map((item, index) => (
          <li key={index} className="list-item">
            <span className="list-text">{item.text}</span>
            <div className="button-container">
              {item.isText && (
                <button onClick={() => handleEditClick(index)} className="edit-button">
                  Editar
                </button>
              )}
              <button onClick={() => handleDeleteClick(index)} className="delete-button">
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
