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
import { actions as newestPhonesActions } from './features/newestPhones';
import { actions as hotPhonesActions } from './features/hotPhones';

import { useAppSelector } from './app/hooks';
import { Cart } from './components/Cart';
import { actions as cartActions } from './features/cart';
import { CartItem } from './types/CartItem';
import { PhonePage } from './components/PhonePage/PhonePage';
import { Tabltes } from './components/Tablets';

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

  const getNewestPhones = async() => {
    const data = await client.get('phones/new', 'GET', null);

    dispatch(newestPhonesActions.add(data));
  };

  const getHotPhones = async() => {
    const data = await client.get('phones/hot', 'GET', null);

    dispatch(hotPhonesActions.add(data));
  };

  useEffect(() => {
    const favouritesData = window.localStorage.getItem('favourites');
    const cartData = window.localStorage.getItem('cart');
    let favourite: Phone[] = [];
    let cart: CartItem[] = [];

    if (typeof favouritesData === 'string') {
      favourite = JSON.parse(favouritesData);
    }

    if (typeof cartData === 'string') {
      cart = JSON.parse(cartData);
    }

    if (favourite.length > 0) {
      dispatch(favouritesActions.load(favourite));
    }

    if (cart.length > 0) {
      dispatch(cartActions.load(cart));
    }
  }, []);

  useEffect(() => {
    getNewestPhones();
    getHotPhones();
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
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
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
        <Route path="tablets" element={<Tabltes />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="phone_page" element={<PhonePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
