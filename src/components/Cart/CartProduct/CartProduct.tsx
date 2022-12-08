/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import './CartProduct.scss';
import { CartItem } from '../../../types/CartItem';
import { Phone } from '../../../types/Phone';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../../features/cart';
import { useAppSelector } from '../../../app/hooks';
import cn from 'classnames';
import { LinkToPhone } from './LinkToPhone';

type Props = {
  cartItemInfo: CartItem;
};

export const CartProduct: React.FC<Props> = ({ cartItemInfo }) => {
  const dispatch = useDispatch();
  const cart: CartItem[] = useAppSelector((state) => state.cart);
  const { product, count } = cartItemInfo;
  const { image, name, price, category, itemId } = product;

  const handleRemoveItem = (selectedProduct: Phone) => {
    dispatch(cartActions.remove(selectedProduct));
  };

  const handleOneMore = (selectedProduct: Phone) => {
    dispatch(cartActions.plusOne(selectedProduct));
  };

  const handleOneLess = (selectedProduct: Phone) => {
    dispatch(cartActions.minusOne(selectedProduct));
  };

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <li className="cart__item cart-item">
      <button
        className="cart-item__remove-button"
        type="button"
        onClick={() => handleRemoveItem(product)}
      ></button>

      <LinkToPhone
        categoryName={category.name}
        itemId={itemId}
      >
        <img
          src={`https://teal-tiramisu-13c82d.netlify.app/${image}`}
          alt={name}
          className="cart-item__image"
        />
      </LinkToPhone>

      <LinkToPhone
        categoryName={category.name}
        itemId={itemId}
      >
        <p className="cart-item__title">{name}</p>
      </LinkToPhone>

      <div className="cart-item__count-block">
        <button
          className={cn(
            'cart-item__count-button',
            'cart-item__count-button-less',
            {
              'cart-item__count-button-less--disabled': count === 1,
            },
          )}
          type="button"
          onClick={() => handleOneLess(product)}
          disabled={count === 1}
        ></button>
        <span className="cart-item__count">{count}</span>
        <button
          className="
          cart-item__count-button
          cart-item__count-button-more"
          type="button"
          onClick={() => handleOneMore(product)}
        ></button>
      </div>

      <span className="cart-item__price">{`$${price}`}</span>
    </li>
  );
};
