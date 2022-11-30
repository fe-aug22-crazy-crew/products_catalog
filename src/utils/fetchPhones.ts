const BASE_URL =
  'https://teal-tiramisu-13c82d.netlify.app/.netlify/functions/server/';

type RequestMethod = 'GET';

async function request(
  url: string,
  method: RequestMethod = 'GET',
  id: number | null
) {
  const options: RequestInit = { method: method };
  options.headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  let link = BASE_URL + url;

  if (id) {
    link += '/:' + id;
  }

  try {
    const dataFRomApi = await fetch(link, options);

    return dataFRomApi.json();
  } catch (error) {
    console.log(error);
  }

  return null;
}

export const client = {
  get: (url: string, method: RequestMethod, id: number | null) =>
    request(url, 'GET', null),
};
