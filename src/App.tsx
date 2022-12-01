import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/';
import { Header } from './components/Header/';

import { client } from './utils/fetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from './features/phones';

import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  const dispatch = useDispatch();

  const getPhones = async() => {
    const data = await client.get('phones', 'GET', null);

    dispatch(phonesActions.add(data));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Only content will change here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="phones" element={<Phones />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
