import React, { useEffect, useState } from 'react';

import { Slider } from '../Slider';

import { Info } from './Info/Info';
import { client } from '../../utils/fetchProducts';
import { PhoneData } from '../../types/PhoneData';
import { PhonePageMain } from './PhonePageMain';
import { Breadcrumbs } from '../Breadcrumbs';
import { Phone } from '../../types/Phone';

export const PhonePage: React.FC = () => {
  const [phone, setPhone] = useState<null | PhoneData>(null);
  const [recommended, setRecommended] = useState<Phone[]>([]);

  const getPhone = async() => {
    const data = await client.get(
      'phones/' + location.pathname.split('/').slice(-1).join(''),
      'GET',
      null,
    );

    setPhone(data);
  };

  const getRecommended = async() => {
    const data = await client.get(
      'phones/' + location.pathname.split('/').slice(-1).join('')
        + '/recommended',
      'GET',
      null,
    );

    setRecommended(data);
  };

  useEffect(() => {
    getPhone();
    getRecommended();
  }, []);

  if (phone) {
    return (
      <main className="container">
        <Breadcrumbs />
        <PhonePageMain phone={phone}/>
        <Info phone={phone} />
        <Slider
          title={'You may also like'}
          phones={recommended}
        />
      </main>
    );
  } else {
    return null;
  }
};
