import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGamesRecomendation } from '../templates/templeate-creator';

const GamesbyPlatformWeb = {
  async render() {
    return `
    <div class="card-recommendations">
    <div class="container">
     <h3 class="title fw-bold text-center">Game List Web Platform</h3>
       <div class="row gy-4 row-cols-3" id="game-container">

       </div>
    </div>
  </div>
    `;
  },
  async afterRender() {
    const gamesByPlatformPc = await TheGamesDbSource.gameBaseBroswerPlatform();
    const gamesByPlatformPcContainer = document.querySelector('#game-container');
    gamesByPlatformPc.forEach((game) => {
      gamesByPlatformPcContainer.innerHTML += createGamesRecomendation(game);
    });
  },
};

export default GamesbyPlatformWeb;
