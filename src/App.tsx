import React, { useEffect } from 'react';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/Phones';
import { Header } from './components/Header/Header';

import { client } from './utils/fetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from './features/phones';

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
      {/* Only content will change here */}
      <Header />
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
