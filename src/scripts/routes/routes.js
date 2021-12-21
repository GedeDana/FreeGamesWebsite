import home from '../views/pages/home';
import categoryList from '../views/pages/categoryList';
import Detail from '../views/pages/detailgame';
import GameList from '../views/pages/gameList';
import GamesbyPlatformPc from '../views/pages/gameBasePlatformpc';
import GamesbyPlatformWeb from '../views/pages/gameBasePlatformWeb';
import Bookmark from '../views/pages/bookmark';

const routes = {
  '/': home,
  '/home': home,
  '/category': categoryList,
  '/detail/:id': Detail,
  '/list': GameList,
  '/windows': GamesbyPlatformPc,
  '/broswer': GamesbyPlatformWeb,
  '/bookmark': Bookmark,
};

export default routes;
