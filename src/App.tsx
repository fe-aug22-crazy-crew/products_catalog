import React from 'react';

import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/Phones';

function App() {
  return (
    <div className="App">
      <header> {/* The header is the same for all pages */}
        <nav>
          <Link to="phones">Phones</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      {/* Only content will change here */}
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="phones"
          element={<Phones />}
        />
      </Routes>

      {/* Footer same too */}
      <footer>

      </footer>
    </div>
  );
}

export default App;
