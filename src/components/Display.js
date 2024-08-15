import React from 'react';
import './Display.css';

function Display({ result, buffer }) {
  return (
    <div className="display">
      <div className="action">{buffer}</div>
      <div className="result">{result}</div>
    </div>
  );
}


export default Display;

