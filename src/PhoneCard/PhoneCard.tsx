import React from 'react';
import { Phone } from '../types/Phone';

import './PhoneCard.scss';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { image, itemId, name, price, fullPrice, screen, capacity, ram } =
    phone;

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
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.62852 0.631356C10.1584 0.411782 10.7264 0.298767 11.3 0.298767C11.8737 0.298767 12.4416 0.411782 12.9716 0.631356C13.5015 0.85093 13.983 1.17276 14.3885 1.57846C14.7941 1.98392 15.1158 2.46531 15.3353 2.99513C15.5549 3.52505 15.6679 4.09304 15.6679 4.66665C15.6679 5.24026 15.5549 5.80825 15.3353 6.33817C15.1158 6.86805 14.794 7.34947 14.3884 7.75496C14.3883 7.755 14.3884 7.75492 14.3884 7.75496L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507 13.6483L1.61174 7.75496C0.792668 6.93589 0.33252 5.82499 0.33252 4.66665C0.33252 3.50831 0.792668 2.39741 1.61174 1.57834C2.43081 0.759273 3.54171 0.299124 4.70005 0.299124C5.85839 0.299124 6.96928 0.759273 7.78835 1.57834L8.00005 1.79003L8.21162 1.57846C8.21166 1.57842 8.21158 1.5785 8.21162 1.57846C8.61711 1.17281 9.09865 0.850909 9.62852 0.631356ZM13.3983 2.56818C13.1228 2.29255 12.7957 2.0739 12.4357 1.92472C12.0756 1.77555 11.6898 1.69877 11.3 1.69877C10.9103 1.69877 10.5245 1.77555 10.1644 1.92472C9.80441 2.0739 9.4773 2.29255 9.2018 2.56818L8.49502 3.27496C8.22165 3.54833 7.77844 3.54833 7.50507 3.27496L6.7984 2.56829C6.24189 2.01177 5.48708 1.69912 4.70005 1.69912C3.91301 1.69912 3.15821 2.01177 2.60169 2.56829C2.04517 3.12481 1.73252 3.87961 1.73252 4.66665C1.73252 5.45369 2.04517 6.20849 2.60169 6.76501L8.00005 12.1634L13.3984 6.76501C13.674 6.48951 13.8928 6.16229 14.042 5.80227C14.1911 5.44224 14.2679 5.05635 14.2679 4.66665C14.2679 4.27695 14.1911 3.89106 14.042 3.53103C13.8928 3.17101 13.6739 2.84367 13.3983 2.56818Z"
              fill="#313237"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};