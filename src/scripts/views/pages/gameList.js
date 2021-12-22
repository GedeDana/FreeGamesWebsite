import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGamesRecomendation } from '../templates/templeate-creator';

const GameList = {
  async render() {
    return `
    <div class="card-recommendations" tabindex="0">
      <div class="container">
      <h3 class="title fw-bold text-center">Game List</h3>
      <div id="contaider-loading">
      </div>
        <div class="row gy-4 row-cols-3" id="game-container">

        </div>
      </div>
    </div>
    `;
  },
  async afterRender() {
    const gameRecomendationContainer = document.querySelector('#game-container');
    const loadingContainer = document.querySelector('#contaider-loading');
    const lodingPages = '<div class="lds-dual-ring"></div>'; // Source html https://loading.io/css/ //
    loadingContainer.innerHTML = lodingPages;
    const gamesRecomendationData = await TheGamesDbSource.gameList();
    loadingContainer.innerHTML = '';
    gamesRecomendationData.forEach((game) => {
      gameRecomendationContainer.innerHTML += createGamesRecomendation(game);
    });
  },
};

export default GameList;
