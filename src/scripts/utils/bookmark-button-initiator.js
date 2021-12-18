import FavoriteGamesIdb from '../data/favoritegames-idb';
import { createBookmarkGamesTemplate, createUnbookmarkGamesTemplate } from '../views/templates/templeate-creator';

const bookmarkButtonInitiator = {
  async init({ bookmarkButtonContainer, game }) {
    this._bookmarkButtonContainer = bookmarkButtonContainer;
    this._game = game;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._game;

    if (await this._isGameExist(id)) {
      this._renderUnbookmark();
    } else {
      this._renderBookmark();
    }
  },

  async _isGameExist(id) {
    const game = await FavoriteGamesIdb.getGame(id);
    return !!game;
  },

  _renderBookmark() {
    this._bookmarkButtonContainer.innerHTML = createBookmarkGamesTemplate();

    const likeButton = document.querySelector('#bookmarkButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteGamesIdb.putGame(this._game);
      this._renderButton();
    });
  },

  _renderUnbookmark() {
    this._bookmarkButtonContainer.innerHTML = createUnbookmarkGamesTemplate();

    const likeButton = document.querySelector('#bookmarkButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteGamesIdb.deleteGame(this._game.id);
      this._renderButton();
    });
  },

};

export default bookmarkButtonInitiator;
