/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import './App.scss';

import { Route, Routes, useSearchParams } from 'react-router-dom';
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
import { actions as newestPhonesActions } from './features/newestPhones';
import { actions as hotPhonesActions } from './features/hotPhones';

function App() {
  const dispatch = useDispatch();
  const defaultSearchParams = new URLSearchParams({
    qr: 'newest',
    limit: '8',
    pg: '1',
  });

  const [searchParams, setSearchParams] = useSearchParams(defaultSearchParams);

  const handleSearchParamsChange = (newParams: URLSearchParams) => {
    setSearchParams(newParams);
  };

  const getPhones = async() => {
    const data = await client.get('phones', 'GET', null);

    dispatch(phonesActions.add(data));
  };

  const getNewestPhones = async() => {
    const data = await client.get('phones/new', 'GET', null);

    dispatch(newestPhonesActions.add(data));
  };

  const getHotPhones = async() => {
    const data = await client.get('phones/hot', 'GET', null);

    dispatch(hotPhonesActions.add(data));
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
    getNewestPhones();
    getHotPhones();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Only content will change here */}
      <Routes>
        <Route path="products_catalog" element={<HomePage />} />
        <Route
          path="phones"
          element={
            <Phones handleSearchParamsChange={handleSearchParamsChange} />
          }
        />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
