import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <div className="app">
        <nav className="navbar">
          <h1>Math Magicians</h1>
          <ul className="navContainer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/calculatorpage">Calculator</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculatorpage" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
