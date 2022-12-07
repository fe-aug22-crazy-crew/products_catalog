import React, { useEffect, useState } from 'react';
import { Slider } from '../Slider';
import { Info } from './Info/Info';

import { client } from '../../utils/fetchPhones';

export const PhonePage: React.FC = () => {
  const [recPhones, setRecPhones] = useState([]);

  const getRecPhones = async() => {
    const data = await client.get(
      'phones/'
      + location.pathname.split('/').slice(-1).join('') + '/recommended',
      'GET',
      null,
    );

    setRecPhones(data);
  };

  useEffect(() => {
    getRecPhones();
  }, []);

  return (
    <main>
      <div className="container">
        <Info />
        <Slider
          phones={recPhones}
          title={'You may also like'}
        />
      </div>
    </main>
  );
};
