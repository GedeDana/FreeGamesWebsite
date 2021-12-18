import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERISON, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERISON, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteGamesIdb = {
  async getGame(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllGames() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putGame(game) {
    return (await dbPromise).put(OBJECT_STORE_NAME, game);
  },
  async deleteGame(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteGamesIdb;
