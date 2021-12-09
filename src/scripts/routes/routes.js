import home from '../views/pages/home';
import categoryList from '../views/pages/categoryList';
import Detail from '../views/pages/detailgame';
import GameList from '../views/pages/gameList';

const routes = {
  '/': home,
  '/home': home,
  '/category': categoryList,
  '/detail/:id': Detail,
  '/list': GameList,
};

export default routes;
