import TheGamesDbSource from '../../data/thegamesdb-source';
import { createDetailGames, createDetailGamesNoMinimumSpec, createDetailGamesNoPitcure } from '../templates/templeate-creator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <div class="game-detail">
          
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const game = await TheGamesDbSource.detailGame(url.id);
    const gameDetailContainder = document.querySelector('.game-detail');
    if (game.minimum_system_requirements === undefined) {
      if (game.image === undefined) {
        gameDetailContainder.innerHTML = createDetailGamesNoPitcure(game);
      } else {
        gameDetailContainder.innerHTML = createDetailGamesNoMinimumSpec(game);
      }
    } else {
      gameDetailContainder.innerHTML = createDetailGames(game);
    }
  },
};

export default Detail;
