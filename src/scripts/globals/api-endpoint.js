import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}api/games`,
  NEW_RELEASE: `${CONFIG.BASE_URL}api/games?sort-by=release-date`,
  FILTER_BY_CATEGORY: (key) => `${CONFIG.BASE_URL}/api/games?category=${key}`,
  GAME_LIST: `${CONFIG.BASE_URL}api/games?sort-by=alphabetical`,
  DETAIL: (id) => `${CONFIG.BASE_URL}api/game?id=${id}`,
  WINDOWS_PLATFORM_GAME: `${CONFIG.BASE_URL}api/games?platform=pc`,
  BROSWER_PLATFORM_GAME: `${CONFIG.BASE_URL}api/games?platform=browser`,
};

export default API_ENDPOINT;
