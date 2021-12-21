import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGameByCategory } from '../templates/templeate-creator';

const categoryList = {
  async render() {
    return `
    <div class="content-group" tabindex="0">
      <div class="container">
        <h3 class="title fw-bold">Game Category List</h3>
        <div class="card-content" id="game-category-container">
        
        </div>
      </div>
    </div>`;
  },

  initializeButton() {
    const buttonValue = document.querySelector('#clickButton');
    buttonValue.addEventListener('click', () => {
      const inputValue = document.querySelector('#value').value;
      TheGamesDbSource.filterByCategory(inputValue)
        .then((gamesCategorylistData) => {
          const gamesCategoryContainer = document.querySelector('#game-category-container');
          gamesCategoryContainer.innerHTML = '';

          gamesCategorylistData.forEach((game) => {
            gamesCategoryContainer.innerHTML += createGameByCategory(game);
          });
        });
    });
  },

  afterRender: null,
};

export default categoryList;
