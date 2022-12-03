import React, { useEffect, useState } from 'react';
import { PhoneCard } from '../PhoneCard';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import './Phones.scss';
import './Pagination.scss';
import ReactPaginate from 'react-paginate';
import arrowNext from '../../images/arrow-next.svg';
import arrowPrev from '../../images/arrow-prev.svg';
import { Select } from './Select/Select';

export const Phones: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);

  const [sortType, setSortType] = useState('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [amount, setAmount] = useState(24);
  const [isAmountOpen, setIsAmountOpen] = useState(false);

  const [amountOfPages, setAmountOfPages] = useState(
    Math.ceil(phones.length / amount),
  );

  const [itemOffset, setItemOffset] = useState(0);

  const pages: number[] = [];

  let currentItems = phones;

  for (let i = 1; i <= amountOfPages; i++) {
    pages.push(i);
  }

  const handleAmountSelect = (e: React.MouseEvent) => {
    setAmount(+e.currentTarget.innerHTML);
    setIsAmountOpen(false);
  };

  const handleSortSelect = (e: React.MouseEvent) => {
    setSortType(e.currentTarget.innerHTML);
    setIsSortOpen(false);
  };

  const handleSortOpen = (newIsSortOpen: boolean) => {
    setIsSortOpen(newIsSortOpen);
  };

  const handleAmountOpen = (newIsAmountOpen: boolean) => {
    setIsAmountOpen(newIsAmountOpen);
  };

  const endOffset = itemOffset + amount;

  currentItems = phones.slice(itemOffset, endOffset);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * amount) % phones.length;

    window.scrollTo({ top: 0 });
    setItemOffset(newOffset);
  };

  const sortTypes = ['Newest', 'Oldest', 'Highest price', 'Lowest price'];
  const amounts = [8, 16, 24];

  useEffect(() => {
    setAmountOfPages(Math.ceil(phones.length / amount));
  });

  return (
    <main className="phones">
      <div className="container">
        <h2 className="phones__title">Mobile phones</h2>
        <p className="phones__models-count">{`${phones.length} models`}</p>
        <div className="phones__selects">
          <Select
            handleOpen={handleSortOpen}
            title="Sort by"
            defaultValue={sortType}
            options={sortTypes}
            isOpen={isSortOpen}
            handleSelect={handleSortSelect}
            fieldType="phones__select-field--sort"
          />

          <Select
            handleOpen={handleAmountOpen}
            title="Items on page"
            defaultValue={amount}
            options={amounts}
            isOpen={isAmountOpen}
            handleSelect={handleAmountSelect}
            fieldType="phones__select-field--amount"
          />
        </div>
        <ul className="phones__list">
          {currentItems.map((phone: Phone) => (
            <li key={phone.id} className="phones__item">
              <PhoneCard phone={phone} />
            </li>
          ))}
        </ul>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img src={arrowNext} alt="arrow-next" />}
          onPageChange={handlePageClick}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          pageCount={amountOfPages}
          previousLabel={<img src={arrowPrev} alt="arrow-prev" />}
          containerClassName="pagination"
          pageLinkClassName="pagination__item"
          activeLinkClassName="pagination__item--active"
          previousLinkClassName="pagination__item"
          nextLinkClassName="pagination__item"
          breakLinkClassName="pagination__item"
        />
        ;
      </div>
    </main>
  );
};
