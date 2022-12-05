/* eslint-disable max-len */
import React from 'react';
import cl from 'classnames';
import arrowDown from '../../../images/arrow-down.svg';

type Props = {
  handleOpen: (newIsOpen: boolean) => void;
  title: string;
  defaultValue: string | number;
  options: string[] | number[];
  isOpen: boolean;
  handleSelect: (e: React.MouseEvent) => void;
  fieldType: string;
};

export const Select: React.FC<Props> = ({
  handleOpen,
  title,
  defaultValue,
  options,
  isOpen,
  handleSelect,
  fieldType,
}) => {
  return (
    <div onMouseLeave={() => handleOpen(false)} className="select">
      <p className="select__title">{title}</p>

      <div
        onClick={() => handleOpen(!isOpen)}
        className={cl('select__field', fieldType)}
      >
        <p className="select__sort-type">{defaultValue}</p>

        <div className={cl('select__arrow', {
          'select__arrow--up': isOpen,
        })}>
          <img src={arrowDown} alt="arrow" />
        </div>
      </div>
      <div
        className={cl('select__options', {
          'select__options--hidden': !isOpen,
        })}
      >
        {options.map((option) => (
          <div
            key={option}
            className={cl('select__field', fieldType, 'select__option')}
            onClick={handleSelect}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
