import Result from './Result';

function Calculator() {
  return (
    <div className="calculator">
      <Result />
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="operator">÷</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="operator">x</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="operator">-</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="operator">+</button>
      <button type="button" className="button btn-zero">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="operator">=</button>
    </div>
  );
}

export default Calculator;
