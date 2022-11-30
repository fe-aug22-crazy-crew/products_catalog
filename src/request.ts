import { Phone } from './types/Phone';

const BASE_URL = 'https://teal-tiramisu-13c82d.netlify.app/.netlify/functions/server/';

export const getAllPhones = async() => {
  const response = await fetch(BASE_URL + 'phones');
  const phones: Phone[] = await response.json();

  if (!phones) {
    throw new Error('Something went wrong!');
  }

  return phones;
};
