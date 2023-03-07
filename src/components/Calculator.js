import '../App.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const { total, next, operation } = state;

  const onClickHandler = (event) => {
    const action = event.target.textContent;
    const newState = calculate(state, action);
    setState(newState);
  };

  return (
    <div className="calculator">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="button" onClick={onClickHandler}>
        AC
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        +/-
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        %
      </button>
      <button type="button" className="operator" onClick={onClickHandler}>
        ÷
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        7
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        8
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        9
      </button>
      <button type="button" className="operator" onClick={onClickHandler}>
        x
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        4
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        5
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        6
      </button>
      <button type="button" className="operator" onClick={onClickHandler}>
        -
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        1
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        2
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        3
      </button>
      <button type="button" className="operator" onClick={onClickHandler}>
        +
      </button>
      <button
        type="button"
        className="button btn-zero"
        onClick={onClickHandler}
      >
        0
      </button>
      <button type="button" className="button" onClick={onClickHandler}>
        .
      </button>
      <button type="button" className="operator" onClick={onClickHandler}>
        =
      </button>
    </div>
  );
}

export default Calculator;
