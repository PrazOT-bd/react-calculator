import React from 'react';
import './Keypad.css';

function Keypad({ handleClick }) {
  return (
    <div className="keypad">
     
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button> 
      <button className="operation" onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button className="operation" onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('1')}>7</button>
      <button onClick={() => handleClick('2')}>8</button>
      <button onClick={() => handleClick('3')}>9</button>
      <button className="operation" onClick={() => handleClick('*')}>*</button>
      <button className="clear" onClick={() => handleClick('Clear')}>C</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('=')}>=</button>
      <button className="operation" onClick={() => handleClick('/')}>/</button>
    </div>
  );
}

export default Keypad;
