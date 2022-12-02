import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions as favouritesActions } from '../../features/favourites';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import notFavorite from '../../images/favourites.svg';
import favorite from '../../images/selectedFavourite.svg';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { 
    image, 
    itemId, 
    name, 
    price, 
    fullPrice, 
    screen, 
    capacity, 
    ram 
  } = phone;

  const dispatch = useDispatch();
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);

  const isSelected = favouritePhones.some(gadget => gadget.id === phone.id);

  const handleFavourite = (selectedPhone: Phone) => {
    if (!isSelected) {
      dispatch(favouritesActions.add(selectedPhone));
    } else {
      dispatch(favouritesActions.remove(selectedPhone));
    }
  };

  useEffect(() => {
    window.localStorage.setItem('favourites', JSON.stringify(favouritePhones));
  }, [favouritePhones]);
 
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
        <button className="product__favourite-adding" onClick={() => handleFavourite(phone)}>
          {isSelected 
            ? <img src={favorite} alt="favorite" />
            : <img src={notFavorite} alt="notFavorite" />}
        </button>
      </div>
    </div>
  );
};
