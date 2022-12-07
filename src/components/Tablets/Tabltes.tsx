import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions as tabletsActions } from '../../features/tablets';
import { client } from '../../utils/fetchPhones';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs';
import { CSSTransition } from 'react-transition-group';

import './Tabltes.scss';

export const Tabltes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const tablets = useAppSelector((state) => state.tablets);

  const loadTablets = async() => {
    setIsLoading(true);

    try {
      const data = await client.get('/tablets', 'GET', null);

      dispatch(tabletsActions.add(data));
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTablets();
  }, []);

  return (
    <main className="tablets">
      <div className="container">
        <div className="tablets__content">
          <Breadcrumbs />
          <h1 className="tablets__title">Tablets</h1>
          <ul className="tablets__list">
            <CSSTransition
              in={isLoading}
              timeout={300}
              classNames="loader"
              unmountOnExit
            >
              <Loader />
            </CSSTransition>

            {isError && (
              <p className="tablets__message">Something went wrong &#x1F625;</p>
            )}

            {!isLoading && !tablets.length && (
              <p className="tablets__message">No tablets yet &#x1F625;</p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};
