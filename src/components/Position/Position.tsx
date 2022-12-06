import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import './Position.scss';

export const Position: React.FC = () => {
  const position = window.location.pathname;
  const steps = position
    .slice(1)
    .split('/');
  const formatSteps = steps.map(word => word[0].toUpperCase() + word.slice(1));

  return (
    <div className="position">
      <Link to="/home" className="position__icon position__icon-home"></Link>
      {steps.map((step, i) => {
        const targetPath = '/' + steps.slice(0, i + 1).join('/');

        return (
          <React.Fragment key={step}>
            <div className="position__icon position__icon-arrow"></div>
            <Link
              to={targetPath}
              className={cn(
                'position__name',
                {
                  'position__name--current': position === targetPath,
                },
              )}
            >
              {formatSteps[i]}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
