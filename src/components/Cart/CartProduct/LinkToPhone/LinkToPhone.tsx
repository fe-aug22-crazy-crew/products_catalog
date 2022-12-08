import React from 'react';
import { Link } from 'react-router-dom';

import './LinkToPhone.scss';

type Props = {
  categoryName: string;
  itemId: string;
  children: React.ReactNode;
};

export const LinkToPhone: React.FC<Props> = ({
  categoryName,
  itemId,
  children,
}) => (
  <Link to={`/${categoryName}s/${itemId}`} className="link-to-phone">
    {children}
  </Link>
);
