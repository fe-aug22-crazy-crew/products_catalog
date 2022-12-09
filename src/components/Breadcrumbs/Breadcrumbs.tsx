import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbs.scss';

export const Breadcrumbs: React.FC = () => {
  const lastSymbol
    = window.location.hash.indexOf('?') === -1
      ? window.location.hash.length
      : window.location.hash.indexOf('?');

  const position = window.location.hash.slice(1, lastSymbol);
  const steps = position.slice(1).split('/');
  const formatSteps = steps.map((text) => {
    const words = text.split('-');

    if (words.length > 1) {
      return words
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    } else {
      return text[0].toUpperCase() + text.slice(1);
    }
  });

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__icon breadcrumbs__icon-home"></Link>
      {steps.map((step, i) => {
        const targetPath = '/' + steps.slice(0, i + 1).join('/');

        return (
          <React.Fragment key={step}>
            <div className="breadcrumbs__icon breadcrumbs__icon-arrow"></div>
            <Link
              to={targetPath}
              className={cn('breadcrumbs__name', {
                'breadcrumbs__name--current': position === targetPath,
              })}
            >
              {formatSteps[i]}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
