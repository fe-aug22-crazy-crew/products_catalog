import React from 'react';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/Phones';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Only content will change here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="phones" element={<Phones />} />
      </Routes>

      {/* Footer same too */}
      <footer></footer>
    </div>
  );
}

export default App;
