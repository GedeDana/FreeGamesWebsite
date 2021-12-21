import FavoriteGamesIdb from '../../data/favoritegames-idb';
import { createGameByBookmark } from '../templates/templeate-creator';

const Bookmark = {
  async render() {
    return `<div class="content-group">
    <div class="container">
      <h3 class="title fw-bold">My Library</h3>
      <div class="card-content" id="game-library">
            
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    const games = await FavoriteGamesIdb.getAllGames();
    const gamesContainer = document.querySelector('#game-library');
    games.forEach((game) => {
      gamesContainer.innerHTML += createGameByBookmark(game);
    });
  },

};
export default Bookmark;
