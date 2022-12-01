/* eslint-disable no-shadow */
import React from 'react';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import favourites from '../../images/favourites.svg';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { image, itemId, name, price, fullPrice, screen, capacity, ram }
    = phone;

  return (
    <div className="product">
      <img
        className="product__image"
        src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
        alt={itemId}
      />

      <p className="product__name">{name}</p>

      <div className="product__price-block">
        {
          <>
            <p className="product__price">${price}</p>
            <p className="product__full-price">${fullPrice}</p>
          </>
        }
      </div>

      <ul className="product__properties">
        <li className="product__property">
          <p className="product__property-name">Screen</p>
          <p className="product__property-value">{screen}</p>
        </li>

        <li className="product__property">
          <p className="product__property-name">Capacity</p>
          <p className="product__property-value">{capacity}</p>
        </li>

        <li className="product__property">
          <p className="product__property-name">RAM</p>
          <p className="product__property-value">{ram}</p>
        </li>
      </ul>

      <div className="product__options">
        <div className="product__cart-adding">Add to cart</div>
        <div className="product__favourite-adding">
          <img src={favourites} alt="favourites-icon" />
        </div>
      </div>
    </div>
  );
};
