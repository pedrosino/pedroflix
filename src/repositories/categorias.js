import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Não foi possível obter os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Não foi possível obter os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
