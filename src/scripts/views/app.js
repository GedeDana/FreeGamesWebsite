import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import categoryList from './pages/categoryList';

class App {
  constructor({ content, loading }) {
    this._content = content;
    this._loading = loading;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      content: this._content,
      loading: this._loading,
    });

    categoryList.initializeButton();
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    if (page.afterRender) await page.afterRender();
  }
}

export default App;
