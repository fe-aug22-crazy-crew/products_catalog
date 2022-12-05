import React from 'react';
import { CSSTransition } from 'react-transition-group';

import cn from 'classnames';

import './CountInfo.scss';

type Props = {
  condition: boolean;
  count: number;
  burgerMenu: boolean;
};

export const CountInfo: React.FC<Props> = ({
  condition,
  count,
  burgerMenu,
}) => (
  <CSSTransition
    in={condition}
    timeout={300}
    classNames={cn('count-info', {
      'count-info--small ': burgerMenu,
    })}
    unmountOnExit
  >
    <div className="count-info">{count >= 1 && count}</div>
  </CSSTransition>
);
