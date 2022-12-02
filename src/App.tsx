import React, { useEffect } from 'react';

import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { Phones } from './components/Phones/';
import { Header } from './components/Header/';

import { client } from './utils/fetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from './features/phones';

import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';
import { Favourites } from './components/Favourites';
import { Phone } from './types/Phone';
import { actions as favouritesActions } from './features/favourites';

function App() {
  const dispatch = useDispatch();

  const getPhones = async () => {
    const data = await client.get('phones', 'GET', null);
    dispatch(phonesActions.add(data));
  };

  useEffect(() => {
    const dataFromLocalStorage = window.localStorage.getItem('favourites');
    let phones: Phone[] = [];

    if (typeof dataFromLocalStorage === 'string') {
      phones = JSON.parse(dataFromLocalStorage);
    }

    if (phones.length > 0) {
      dispatch(favouritesActions.load(phones));
    }
  }, []);

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Only content will change here */}
      <Routes>
        <Route path="/products_catalog" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="phones" element={<Phones />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
