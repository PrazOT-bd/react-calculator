import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';

function Calculator() {
  const [result, setResult] = useState('');
  const [buffer, setBuffer] = useState('');

  const handleClick = (value) => {
    console.log('Button clicked:', value);
    if (value === '=') {
      calculate();
    } else if (value === 'Clear') {
      clear();
    } else {
      setBuffer(buffer + value);
    }
  };

  const calculate = () => {
    try {
      const result = evaluate(buffer);
      setResult(result.toString());
      setBuffer('');
    } catch (error) {
        setResult('Error');
        setBuffer('');
      }
    };
  
    const clear = () => {
      setResult('');
      setBuffer('');
    };
  
    return (
      <div>
        <Display result={result} buffer={buffer} />
        <Keypad handleClick={handleClick} />
      </div>
    );
  }
  
  export default Calculator;
  