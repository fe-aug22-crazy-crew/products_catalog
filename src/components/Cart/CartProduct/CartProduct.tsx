/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CartProduct.scss';
import { CartItem } from '../../../types/CartItem';
import { Phone } from '../../../types/Phone';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../../features/cart';
import { useAppSelector } from '../../../app/hooks';
import cn from 'classnames';

type Props = {
  cartItemInfo: CartItem;
}

export const CartProduct: React.FC<Props> = ({ cartItemInfo }) => {
  const dispatch = useDispatch();
  const cart: CartItem[] = useAppSelector((state) => state.cart);
  const { product, count } = cartItemInfo;
  const { image, name, price, category } = product;

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

      <img
        className="cart-item__image"
        src={`https://teal-tiramisu-13c82d.netlify.app/${image}`}
        alt={name}
      />

      <Link to={`${category}/:${product.id}`} className="cart-item__title">
        {name}
      </Link>

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
        >
        </button>
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
