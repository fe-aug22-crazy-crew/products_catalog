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

type Props = {
  handleSearchParamsChange: (newParams: URLSearchParams) => void;
};

export const Phones: React.FC<Props> = ({ handleSearchParamsChange }) => {
  const phones = useAppSelector((state) => state.phones);

  const [sortType, setSortType] = useState('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [amount, setAmount] = useState(24);
  const [isAmountOpen, setIsAmountOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [amountOfPages, setAmountOfPages] = useState(
    Math.ceil(phones.length / amount),
  );

  const [itemOffset, setItemOffset] = useState(0);

  let currentItems = phones;

  const sortedPhones: Phone[] = phones.sort((phoneA: Phone, phoneB: Phone) => {
    switch (sortType) {
    case 'Newest':
      if (phoneA.year !== phoneB.year) {
        return phoneB.year - phoneA.year;
      } else {
        return phoneA.id - phoneB.id;
      }

    case 'Oldest':
      if (phoneA.year !== phoneB.year) {
        return phoneA.year - phoneB.year;
      } else {
        return phoneA.id - phoneB.id;
      }

    case 'Highest price':
      if (phoneA.price !== phoneB.price) {
        return phoneB.price - phoneA.price;
      } else {
        return phoneA.id - phoneB.id;
      }

    case 'Lowest price':
      if (phoneA.year !== phoneB.year) {
        return phoneA.year - phoneB.year;
      } else {
        return phoneA.id - phoneB.id;
      }
    }
  });

  const getQuery = (newQuery: string) => {
    switch (newQuery) {
    case 'Newest':
      return 'newest';

    case 'Oldest':
      return 'oldest';

    case 'Highest price':
      return 'expensive';

    case 'Lowest price':
      return 'cheapest';

    default:
      return '';
    }
  };

  const handleAmountSelect = (e: React.MouseEvent) => {
    setAmount(+e.currentTarget.innerHTML);
    setIsAmountOpen(false);

    const qr = getQuery(sortType);

    handleSearchParamsChange(new URLSearchParams({
      qr,
      'limit': e.currentTarget.innerHTML,
      'pg': String(currentPage),
    }));
  };

  const handleSortSelect = (e: React.MouseEvent) => {
    setSortType(e.currentTarget.innerHTML);
    setIsSortOpen(false);

    const qr = getQuery(e.currentTarget.innerHTML);

    handleSearchParamsChange(new URLSearchParams({
      qr,
      'limit': String(amount),
      'pg': String(currentPage),
    }));
  };

  const handleSortOpen = (newIsSortOpen: boolean) => {
    setIsSortOpen(newIsSortOpen);
  };

  const handleAmountOpen = (newIsAmountOpen: boolean) => {
    setIsAmountOpen(newIsAmountOpen);
  };

  const endOffset = itemOffset + amount;

  currentItems = sortedPhones.slice(itemOffset, endOffset);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * amount) % phones.length;
    const pg = newOffset / amount + 1;

    setCurrentPage(pg);

    const qr = getQuery(sortType);

    const paramsObj = new URLSearchParams({
      qr,
      'limit': String(amount),
      'pg': String(pg),
    });

    handleSearchParamsChange(paramsObj);

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
