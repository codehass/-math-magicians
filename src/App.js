import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import './index.css';

function App() {
  return (
    // <div className="app">
    //   <Calculator />
    // </div>
    <>
      <nav className="nav-bar">
        <div className="logo"> Math Magicians</div>
        <ul>
          <li>
            {' '}
            <Link to="/"> Home</Link>
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
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
