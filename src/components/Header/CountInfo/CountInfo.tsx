import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './CountInfo.scss';

type Props = {
  condition: boolean;
  count: number;
};

export const CountInfo: React.FC<Props> = ({ condition, count }) => (
  <CSSTransition
    in={condition}
    timeout={300}
    classNames="count-info"
    unmountOnExit
  >
    <div className="count-info">{count >= 1 && count}</div>
  </CSSTransition>
);
