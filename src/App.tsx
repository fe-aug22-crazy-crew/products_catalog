/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

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
import { useAppSelector } from './app/hooks';

function App() {
  const dispatch = useDispatch();
  const defaultSearchParams = new URLSearchParams({
    qr: 'newest',
    limit: '24',
    pg: '1',
  });

  const [searchParams, setSearchParams] = useSearchParams(defaultSearchParams);
  const [totalItems, setTotalItems] = useState(0);

  const handleSearchParamsChange = (newParams: URLSearchParams) => {
    setSearchParams(newParams);
  };

  const getPhones = async() => {
    const data = await client.get('phones?' + searchParams, 'GET', null);

    dispatch(phonesActions.add(data.rows));
    setTotalItems(data.count);
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
  }, [searchParams]);

  return (
    <div className="App">
      <Header />
      {/* Only content will change here */}
      <Routes>
        <Route path="products_catalog" element={<HomePage />} />
        <Route
          path="phones"
          element={
            <Phones
              handleSearchParamsChange={handleSearchParamsChange}
              totalItems={totalItems}
              searchParams={searchParams}
            />
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
