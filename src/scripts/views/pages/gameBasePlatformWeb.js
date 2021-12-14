import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGamesRecomendation } from '../templates/templeate-creator';

const GamesbyPlatformWeb = {
  async render() {
    return `
    <div class="card-recommendations" tabindex="0">
      <div class="container">
      <h3 class="title fw-bold text-center">Game List Web Platform</h3>
        <div class="row gy-4 row-cols-3" id="game-container">

        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
