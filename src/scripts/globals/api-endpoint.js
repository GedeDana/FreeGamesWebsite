import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}api/games`,
  NEW_RELEASE: `${CONFIG.BASE_URL}api/games?sort-by=release-date`,
  FILTER_BY_CATEGORY: `${CONFIG.BASE_URL}/api/games?category=`,
  GAME_LIST: `${CONFIG.BASE_URL}api/games?sort-by=alphabetical`,
};

export default API_ENDPOINT;
