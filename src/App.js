import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import './index.css';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo"> Math Magicians</div>
        <ul>
          <li>
            {' '}
            <Link to="/-math-magicians/"> Home</Link>
            {' '}
          </li>
          <li>
            {' '}
            <Link to="/calculator"> Calculator</Link>
            {' '}
          </li>
          <li>
            {' '}
            <Link to="/quote"> Quotes</Link>
            {' '}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/-math-magicians/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
