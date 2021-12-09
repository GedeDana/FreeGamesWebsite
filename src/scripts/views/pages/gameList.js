import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGamesRecomendation } from '../templates/templeate-creator';

const GameList = {
  async render() {
    return `
    <div class="card-recommendations">
    <div class="container">
     <h3 class="title fw-bold text-center">Game List</h3>
       <div class="row gy-4 row-cols-3" id="game-container">

       </div>
    </div>
</div>
    `;
  },
  async afterRender() {
    const gamesRecomendationData = await TheGamesDbSource.gameList();
    const gameRecomendationContainer = document.querySelector('#game-container');
    gamesRecomendationData.forEach((game) => {
      gameRecomendationContainer.innerHTML += createGamesRecomendation(game);
    });
  },
};

export default GameList;
