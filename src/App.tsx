/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import './App.scss';

import { Route, Routes, useSearchParams } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Phones } from './components/Phones/';
import { Header } from './components/Header/';

import { client } from './utils/fetchProducts';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from './features/phones';

import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';
import { Favourites } from './components/Favourites';
import { Phone } from './types/Phone';

import { actions as favouritesActions } from './features/favourites';
import { actions as newestPhonesActions } from './features/newestPhones';
import { actions as hotPhonesActions } from './features/hotPhones';

import { Cart } from './components/Cart';
import { actions as cartActions } from './features/cart';
import { CartItem } from './types/CartItem';
import { PhonePage } from './components/PhonePage/PhonePage';
import { Tabltes } from './components/Tablets';
import { Accessories } from './components/Accessories';

function App() {
  const dispatch = useDispatch();
  const defaultSearchParams = new URLSearchParams({
    qr: 'newest',
    limit: '24',
    pg: '1',
  });

  const [searchParams, setSearchParams] = useSearchParams(defaultSearchParams);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoadingPhones, setIsLoadingPhones] = useState(false);
  const [isLoadingSliders, setIslodingSliders] = useState(false);
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
    (async() => {
      setIslodingSliders(true);
      await getNewestPhones();
      await getHotPhones();
      setIslodingSliders(false);
    })();
  }, []);

  useEffect(() => {
    (async() => {
      setIsLoadingPhones(true);
      await getPhones();
      setIsLoadingPhones(false);
    })();
  }, [searchParams]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="products_catalog" element={
          <HomePage
            isLoading={isLoadingSliders}
          />} />
        <Route path="/" element={<HomePage isLoading={isLoadingSliders} />} />

        <Route path="home">
          <Route index element={<HomePage isLoading={isLoadingSliders} />} />
          <Route path=":itemId" element={<PhonePage />} />
        </Route>

        <Route path="phones">
          <Route
            index
            element={
              <Phones
                handleSearchParamsChange={handleSearchParamsChange}
                totalItems={totalItems}
                searchParams={searchParams}
                isLoading={isLoadingPhones}
              />
            }
          />
          <Route path=":itemId" element={<PhonePage />} />
        </Route>

        <Route path="accessories" element={<Accessories />} />
        <Route path="tablets" element={<Tabltes />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
