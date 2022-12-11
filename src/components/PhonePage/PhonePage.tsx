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
  const [isError, setIsError] = useState(true);

  const getPhone = async() => {
    setIsLoading(true);

    try {
      const data: PhoneData = await client.get(
        'phones/' + location.hash.split('/').slice(-1).join(''),
        'GET',
        null,
      );

      setPhone(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommended = async() => {
    try {
      const data = await client.get(
        'phones/'
        + location.hash.split('/').slice(-1).join('')
        + '/recommended',
        'GET',
        null,
      );

      setRecommended(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async() => {
      await getPhone();
      await getRecommended();
    })();
  }, [location.hash]);

  return (
    <main className="phonePage container">
      <Breadcrumbs />

      <Back />

      {!isLoading
        && isError
        && (
          <p className="phonePage__error">
            Something went wrong &#x1F625;
          </p>
        )}

      {isLoading && <Loader />}

      {!isLoading
        && phone
        && (
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
