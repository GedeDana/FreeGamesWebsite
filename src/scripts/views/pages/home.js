import TheGamesDbSource from '../../data/thegamesdb-source';
import {
  createGameNewRelase, createGamesRecomendation,
} from '../templates/templeate-creator';

const home = {
  async render() {
    return `
    <div id="jumbotron" class="jumbotron">
      <div class="layer"></div>
      <h2 class="headline">Explore Free Games For Free</h2>
    </div>

    <div class="card-recommendations" tabindex="0">
       <div class="container">
        <h3 class="title fw-bold">Recommendations</h3>
          <div class="row row-cols-3" id="game-container">

          </div>
       </div>
    </div>
  
    <div class="listPlatform container">
      <h3 class="title fw-bold">by Platform</h3>
      <div class="row" id="game-by-platformPc">
        <div class="col">
          <div class="card bg-dark text-white platform">
            <img src="/temp-img/windows.png" class="card-img" alt="Windows">
            <div class="card-img-overlay">
              <h5 class="card-title"><a href="/#/windows/">Windows</a></h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white platform">
            <img src="/temp-img/browser.png" class="card-img" alt="Windows">
            <div class="card-img-overlay">
              <h5 class="card-title"><a href="/#/broswer/">Web Broswer</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-group">
      <div class="container">
        <h3 class="title fw-bold">New Release</h3>
        <div class="card-content" id="game-rec-container">
              
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

export default home;
