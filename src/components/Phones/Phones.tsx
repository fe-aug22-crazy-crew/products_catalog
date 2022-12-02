import React, { useState } from 'react';
import { PhoneCard } from '../PhoneCard';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import './Phones.scss';
import arrowDown from '../../images/arrow-down.svg';
import cl from 'classnames';

export const Phones: React.FC = () => {
  const [sortType, setSortType] = useState('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [amount, setAmount] = useState(16);
  const [isAmountOpen, setIsAmountOpen] = useState(false);

  const phones = useAppSelector((state) => state.phones);

  const handleAmountSelect = (e: React.MouseEvent) => {
    setAmount(+e.currentTarget.innerHTML);
    setIsAmountOpen(false);
  };

  const handleSortSelect = (e: React.MouseEvent) => {
    setSortType(e.currentTarget.innerHTML);
    setIsSortOpen(false);
  };

  return (
    <main className="phones">
      <div className="container">
        <h2 className="phones__title">Mobile phones</h2>

        <p className="phones__models-count">{`${phones.length} models`}</p>

        <div className="phones__selects">
          <div
            onMouseLeave={() => setIsSortOpen(false)}
            className="phones__select"
          >
            <p className="phones__select-title">Sort by</p>

            <div
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="phones__select-field phones__select-field--sort"
            >
              <p className="phones__sort-type">{sortType}</p>

              <div className="phones__arrow">
                <img src={arrowDown} alt="arrow-down" />
              </div>
            </div>
            <div
              className={cl('phones__options', {
                'phones__options--hidden-sort': !isSortOpen,
              })}
            >
              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--sort',
                  'phones__option',
                )}
                onClick={handleSortSelect}
              >
                Newest
              </div>

              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--sort',
                  'phones__option',
                )}
                onClick={handleSortSelect}
              >
                Oldest
              </div>

              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--sort',
                  'phones__option',
                )}
                onClick={handleSortSelect}
              >
                Highest price
              </div>

              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--sort',
                  'phones__option',
                )}
                onClick={handleSortSelect}
              >
                Lowest price
              </div>
            </div>
          </div>

          <div
            className="phones__select phones__select"
            onMouseLeave={() => setIsAmountOpen(false)}
          >
            <p className="phones__select-title">Items on page</p>

            <div
              onClick={() => setIsAmountOpen(!isAmountOpen)}
              className="phones__select-field phones__select-field--amount"
            >
              <p className="phones__sort-type">{amount}</p>

              <div className="phones__arrow">
                <img src={arrowDown} alt="arrow-down" />
              </div>
            </div>
            <div
              className={cl('phones__options', {
                'phones__options--hidden-amount': !isAmountOpen,
              })}
            >
              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--amount',
                  'phones__option',
                )}
                onClick={handleAmountSelect}
              >
                8
              </div>

              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--amount',
                  'phones__option',
                )}
                onClick={handleAmountSelect}
              >
                16
              </div>

              <div
                className={cl(
                  'phones__select-field',
                  'phones__select-field--amount',
                  'phones__option',
                )}
                onClick={handleAmountSelect}
              >
                24
              </div>
            </div>
          </div>
        </div>

        <ul className="phones__list">
          {phones.map((phone: Phone) => (
            <li key={phone.id} className="phones__item">
              <PhoneCard phone={phone} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
