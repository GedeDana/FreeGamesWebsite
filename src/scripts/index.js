import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});
