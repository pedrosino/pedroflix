import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Não foi possível obter os dados');
    });
}

export default {
  create,
};
