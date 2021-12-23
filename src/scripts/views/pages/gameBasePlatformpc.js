import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGamesRecomendation } from '../templates/templeate-creator';

const GamesbyPlatformPc = {
  async render() {
    return `
    <div class="card-recommendations" tabindex="0">
      <div class="container">
      <h3 class="title fw-bold text-center">Game List Windows Platform</h3>
        <div id="contaider-loading">
        </div>
        <div class="row gy-4 row-cols-3" id="game-container">

        </div>
      </div>
    </div>
    `;
  },
  async afterRender() {
    const loadingContainer = document.querySelector('#contaider-loading');
    const gamesByPlatformPcContainer = document.querySelector('#game-container');
    const lodingPages = '<div class="lds-dual-ring"></div>'; // Source html https://loading.io/css/ //
    loadingContainer.innerHTML = lodingPages;
    const gamesByPlatformPc = await TheGamesDbSource.gameBasePcPlatform();
    loadingContainer.innerHTML = '';
    gamesByPlatformPc.forEach((game) => {
      gamesByPlatformPcContainer.innerHTML += createGamesRecomendation(game);
    });
  },
};

export default GamesbyPlatformPc;
