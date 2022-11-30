import React, { useEffect } from 'react';

import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/Phones';

import { client } from './utils/fetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from './features/phones';

import { Footer } from './components/Footer';

function App() {
  const dispatch = useDispatch();

  const getPhones = async () => {
    const data = await client.get('phones', 'GET', null);
    dispatch(phonesActions.add(data));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="App">
      <header>
        {/* The header is the same for all pages */}
        <nav>
          <Link to="phones">Phones</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      {/* Only content will change here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="phones" element={<Phones />} />
      </Routes>

      <footer></footer>

      <Footer />
    </div>
  );
}

export default App;
