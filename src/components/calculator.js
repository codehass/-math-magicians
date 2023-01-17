import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.textContent;
    setCalc(calculate(calc, buttonName));
  };

  const { total, next, operation } = calc;

  return (
    <div className="app">
      <p>Lets do some math!</p>
      <div className="calc">
        <div className="screen">
          <p>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </p>
        </div>
        <button type="button" className="btn num" onClick={handleClick}>
          AC
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          +/-
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          %
        </button>
        <button type="button" className="btn oper" onClick={handleClick}>
          ÷
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          7
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          8
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          9
        </button>
        <button type="button" className="btn oper" onClick={handleClick}>
          x
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          4
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          5
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          6
        </button>
        <button type="button" className="btn oper" onClick={handleClick}>
          -
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          1
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          2
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          3
        </button>
        <button type="button" className="btn oper" onClick={handleClick}>
          +
        </button>
        <button type="button" className="btn num zero" onClick={handleClick}>
          0
        </button>
        <button type="button" className="btn num" onClick={handleClick}>
          .
        </button>
        <button type="button" className="btn oper " onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
