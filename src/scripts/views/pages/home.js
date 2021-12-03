import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGameNewRelase, createGamesRecomendation } from '../templates/templeate-creator';

const Home = {
  async render() {
    return `
    <div class="card-recommendations">
       <div class="container">
        <h3 class="title fw-bold">Recommendations</h3>
          <div class="row row-cols-3" id="game-container">

          </div>
       </div>
    </div>
  

    <div class="content-group">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col-8">
           <div class="container">
              <h3 class="title fw-bold">New Release</h3>
              <div class="card-content" id="game-rec-container">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },

  async afterRender() {
    const gamesRecomendationData = await TheGamesDbSource.recommendedGame();
    const gameRecomendationContainer = document.querySelector('#game-container');
    gamesRecomendationData.slice(0, 3).forEach((game) => {
      gameRecomendationContainer.innerHTML += createGamesRecomendation(game);
    });

    const gameNewReleaseData = await TheGamesDbSource.newRelease();
    const gameNewReleaseContainer = document.querySelector('#game-rec-container');
    gameNewReleaseData.slice(0, 5).forEach((game) => {
      gameNewReleaseContainer.innerHTML += createGameNewRelase(game);
    });
  },

};

export default Home;
