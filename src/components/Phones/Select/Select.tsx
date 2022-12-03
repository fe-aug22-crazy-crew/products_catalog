/* eslint-disable max-len */
import React from 'react';
import cl from 'classnames';

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
    <div onMouseLeave={() => handleOpen(false)} className="phones__select">
      <p className="phones__select-title">{title}</p>

      <div
        onClick={() => handleOpen(!isOpen)}
        className={cl('phones__select-field', fieldType)}
      >
        <p className="phones__sort-type">{defaultValue}</p>

        <div className="phones__arrow">
          {!isOpen ? (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.47149 0.528636C9.73184 0.788986 9.73184 1.2111 9.47149 1.47145L5.47149 5.47145C5.21114 5.73179 4.78903 5.73179 4.52868 5.47145L0.528677 1.47144C0.268327 1.2111 0.268327 0.788985 0.528677 0.528636C0.789026 0.268286 1.21114 0.268286 1.47149 0.528636L5.00008 4.05723L8.52868 0.528636C8.78903 0.268287 9.21114 0.268287 9.47149 0.528636Z"
                fill="#B4BDC4"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.528453 5.47124C0.268103 5.21089 0.268103 4.78878 0.528453 4.52843L4.52845 0.528433C4.7888 0.268083 5.21091 0.268083 5.47126 0.528432L9.47126 4.52843C9.73161 4.78878 9.73161 5.21089 9.47126 5.47124C9.21091 5.73159 8.7888 5.73159 8.52845 5.47124L4.99986 1.94265L1.47126 5.47124C1.21091 5.73159 0.788803 5.73159 0.528453 5.47124Z"
                fill="#B3BDC4"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={cl('phones__options', {
          'phones__options--hidden': !isOpen,
        })}
      >
        {options.map((option) => (
          <div
            key={option}
            className={cl('phones__select-field', fieldType, 'phones__option')}
            onClick={handleSelect}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
