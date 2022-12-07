import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions as accessoriesActions } from '../../features/accessories';
import { client } from '../../utils/fetchProducts';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs';
import { CSSTransition } from 'react-transition-group';

import './Accessories.scss';

export const Accessories: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const accessories = useAppSelector((state) => state.accessories);

  const loadTablets = async() => {
    setIsLoading(true);

    try {
      const data = await client.get('/accessories', 'GET', null);

      dispatch(accessoriesActions.add(data));
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
    <main className="accessories">
      <div className="container">
        <div className="accessories__content">
          <Breadcrumbs />
          <h1 className="accessories__title">Accessories</h1>
          <ul className="accessories__list">
            <CSSTransition
              in={isLoading}
              timeout={300}
              classNames="loader"
              unmountOnExit
            >
              <Loader />
            </CSSTransition>

            {isError && (
              <p className="accessories__message">
                Something went wrong &#x1F625;
              </p>
            )}

            {!isLoading && !accessories.length && (
              <p className="accessories__message">
                No accessories yet &#x1F625;
              </p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};
