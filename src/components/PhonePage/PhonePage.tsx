import React, { useEffect, useState } from 'react';

import './PhonePage.scss';

import { Slider } from '../Slider';

import { Info } from './Info/Info';
import { client } from '../../utils/fetchProducts';
import { PhoneData } from '../../types/PhoneData';
import { PhonePageMain } from './PhonePageMain';
import { Breadcrumbs } from '../Breadcrumbs';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader';
import { Back } from '../Back';

export const PhonePage: React.FC = () => {
  const [phone, setPhone] = useState<null | PhoneData>(null);
  const [recommended, setRecommended] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPhone = async() => {
    const data: PhoneData = await client.get(
      'phones/' + location.hash.split('/').slice(-1).join(''),
      'GET',
      null,
    );

    setPhone(data);
  };

  const getRecommended = async() => {
    const data = await client.get(
      'phones/' + location.hash.split('/').slice(-1).join('') + '/recommended',
      'GET',
      null,
    );

    setRecommended(data);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [phone]);

  useEffect(() => {
    (async() => {
      setIsLoading(true);

      await getPhone();
      await getRecommended();
    })();
  }, [location.hash]);

  return (
    <main className="phonePage container">
      <Breadcrumbs />

      <Back />

      {!phone || isLoading ? (
        <Loader />
      ) : (
        <>
          <PhonePageMain phone={phone} />
          <Info phone={phone} />
          <Slider
            title={'You may also like'}
            phones={recommended}
            isLoading={isLoading}
          />
        </>
      )}
    </main>
  );
};
