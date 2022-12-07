import React, { useState } from 'react';

import ArrowPrev from '../../../images/arrow-prev.svg';

import './phonePageMain.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FavouriteIcon } from '../../PhoneCard/FavouriteIcon';
import notFavourite from '../../../images/favourites.svg';
import favourite from '../../../images/selectedFavourite.svg';
// import { useDispatch } from 'react-redux';
// import { Phone } from '../../../types/Phone';
// import { useAppSelector } from '../../../app/hooks';
// import { CartItem } from '../../../types/CartItem';
// import { actions as favouritesActions } from '../../../features/favourites';
// import { actions as cartActions } from '../../../features/cart';

export const PhonePageMain: React.FC = () => {
  const [bigPhoto, setBigPhoto] = useState(
    'https://github.com/'
      + 'mate-academy/product_catalog/blob/main/public/img/'
      + 'phones/apple-iphone-11-pro-max/midnightgreen/00.jpg?raw=true',
  );

  // const dispatch = useDispatch();
  // const favouritePhones: Phone[] = useAppSelector((state) => state
  // .favourites);
  // const cart: CartItem[] = useAppSelector((state) => state.cart);
  //
  // const isSelected = favouritePhones
  // .some((product) => product.itemId === phone.itemId);
  // const isItInCart = cart.some((itemInfo) => itemInfo
  // .product.id === phone.id);
  //
  // const handleAddingToFavourites = (selectedPhone: Phone) => {
  //   if (!isSelected) {
  //     dispatch(favouritesActions.add(selectedPhone));
  //   } else {
  //     dispatch(favouritesActions.remove(selectedPhone));
  //   }
  // };
  //
  // const handleAddingToCart = (selectedPhone: Phone) => {
  //   if (!isItInCart) {
  //     const productInCart = {
  //       product: selectedPhone,
  //       count: 1,
  //     };
  //
  //     dispatch(cartActions.add(productInCart));
  //   }
  // };
  //
  // useEffect(() => {
  //   window
  //   .localStorage.setItem('favourites', JSON.stringify(favouritePhones));
  // }, [favouritePhones]);
  //
  // useEffect(() => {
  //   window.localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

  const photosLinks = [''];

  const colors = ['white', 'red', 'coral'];

  const Colors = {
    white: '#F0F0F0',
    yellow: 'yellow',
    red: 'red',
    coral: 'orange',
    black: 'black',
  };

  const Capacity = ['64Gb', '128GB', '256GB'];

  const priceRegular = 712;
  const priceDiscount = 670;

  const path = document.location.pathname.split('-');

  path.splice(3, 1, '512gb');

  const distPath = path.join('-');

  return (
    <section className="phonePageMain">
      <Link to="/phones" className="phonePageMain__link-back">
        <button className="phonePageMain__back" type="button">
          <img src={ArrowPrev} alt="return back button" />
          <p>Back</p>
        </button>
      </Link>
      <h2 className="phonePageMain__title">Product title</h2>
      <div className="phonePageMain__main-section">
        <div className="phonePageMain__photos-section">
          <div className="phonePageMain__small-photos">
            {photosLinks.map((photo) => {
              return (
                <div
                  className="phonePageMain__small-photo-box"
                  key={Math.random()}
                  onClick={() => setBigPhoto(photo)}
                >
                  <img
                    src={photo}
                    alt="phone photo"
                    className="phonePageMain__small-photo"
                  />
                </div>
              );
            })}
          </div>
          <div className="phonePageMain__photo-box">
            <img src={bigPhoto} className="phonePageMain__big-photo" />
          </div>
        </div>
        <div className="phonePageMain__info-section">
          <div className="phonePageMain__subtitle-box">
            <p className="phonePageMain__selection">Available colors</p>
            <p className="phonePageMain__selection">ID: 802390</p>
          </div>
          <div className="phonePageMain__container">
            <div className="phonePageMain__colors">
              {colors.map((color) => {
                return (
                  <div
                    className={cn('phonePageMain__color-circle', {
                      active: false, // input here current color of phone
                    })}
                    key={Math.random()}
                  >
                    <div
                      className="phonePageMain__color-circle-inner"
                      style={{
                        backgroundColor: Colors[color as keyof typeof Colors],
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <hr className="phonePageMain__line" />
            <p className="phonePageMain__selection">Select capacity</p>
            <div className="phonePageMain__capacity">
              {Capacity.map((capacity) => {
                return (
                  <Link
                    key={Math.random()}
                    to={distPath}
                    className={cn('phonePageMain__capacity-button', {
                      'phonePageMain__capacity-button--active': true,
                    })}
                    type="button"
                  >
                    {capacity}
                  </Link>
                );
              })}
            </div>
            <hr className="phonePageMain__line phonePageMain__line--bottom" />
            <div className="phonePageMain__price">
              {(priceRegular > priceDiscount && (
                <>
                  <h2 className="phonePageMain__price-discount">
                    {priceDiscount + '$'}
                  </h2>
                  <p className="phonePageMain__price-regular">
                    {priceRegular + '$'}
                  </p>
                </>
              )) || (
                <h2 className="phonePageMain__price-discount">
                  {priceRegular + '$'}
                </h2>
              )}
            </div>
            <div className="product__options phonePageMain__options">
              {bigPhoto ? ( // !isItInCart
                <button
                  className="product__cart-adding"
                  type="button"
                  // onClick={() => handleAddingToCart(phone)}
                >
                  Add to cart
                </button>
              ) : (
                <Link
                  to="/cart"
                  className="product__cart-adding product__cart-adding--added"
                >
                  Added to cart
                </Link>
              )}

              <button
                className="product__favourite-adding"
                type="button"
                // onClick={() => handleAddingToFavourites(phone)}
              >
                <FavouriteIcon
                  condition={false} // !isSelected
                  image={notFavourite}
                  alt={'notFavorite'}
                />

                <FavouriteIcon
                  condition={true} // isSelected
                  image={favourite}
                  alt={'favorite'}
                />
              </button>
            </div>
            <div className="phonePageMain__specs">
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Screen</p>
                <p className="phonePageMain__specs-category-value">
                  {'6.1\'\' IPS'}
                </p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Resolution</p>
                <p className="phonePageMain__specs-category-value">2688x1242</p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">Processor</p>
                <p className="phonePageMain__specs-category-value">
                  Apple A12 Bionic
                </p>
              </div>
              <div className="phonePageMain__specs-category">
                <p className="phonePageMain__specs-category-name">RAM</p>
                <p className="phonePageMain__specs-category-value">3 GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
