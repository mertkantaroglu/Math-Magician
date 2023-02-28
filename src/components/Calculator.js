import React from 'react';
import '../App.css';
import Result from './Result';

function Calculator() {
  return (
    <div className="calculator">
      <Result />
      <div className="childElement">
        <button type="button" className="button btn-ac">AC</button>
        <button type="button" className="button btn-plus-minus">+/-</button>
        <button type="button" className="button btn-percent">%</button>
        <button type="button" className="operator operator-divide">÷</button>
      </div>
      <div className="childElement">
        <button type="button" className="button btn-seven">7</button>
        <button type="button" className="button bnt-eight">8</button>
        <button type="button" className="button btn-nine">9</button>
        <button type="button" className="operator operator-multiply">x</button>
      </div>
      <div className="childElement">
        <button type="button" className="button btn-four">4</button>
        <button type="button" className="button btn-five">5</button>
        <button type="button" className="button btn-six">6</button>
        <button type="button" className="operator operator-minus">-</button>
      </div>
      <div className="childElement">
        <button type="button" className="button btn-one">1</button>
        <button type="button" className="button btn-two">2</button>
        <button type="button" className="button btn-three">3</button>
        <button type="button" className="operator operator-plus">+</button>
      </div>
      <div className="childElement">
        <button type="button" className="button btn-zero">0</button>
        <button type="button" className="button btn-dot">.</button>
        <button type="button" className="operator operator-equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
