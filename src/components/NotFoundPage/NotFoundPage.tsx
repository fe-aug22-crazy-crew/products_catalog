import React from 'react';

import './notFoundPage.scss';

import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <main className="notFoundPage">
    <h1 className="notFoundPage__title">Opss... You got lost &#x1F625;</h1>
    <Link to="/" className="notFoundPage__button">
      Back to Home
    </Link>
  </main>
);
