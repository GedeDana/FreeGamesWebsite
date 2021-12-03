import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}api/games`,
  NEW_RELEASE: `${CONFIG.BASE_URL}api/games?sort-by=release-date`,
};

export default API_ENDPOINT;
