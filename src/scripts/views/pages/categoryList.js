import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGameByCategory } from '../templates/templeate-creator';

const categoryList = {
  async render() {
    return `
    <div class="content-group">
    <div class="container">
      <div class="row row-cols-2">
        <div class="col-8 ">
         <div class="container">
            <h3 class="title fw-bold">Game Category List</h3>
            <div class="card-content" id="game-category-container">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  },

  async afterRender() {
    const buttonValue = document.querySelector('#clickButton');

    async function getValue() {
      const inputValue = document.querySelector('#value').value;
      const gamesCategorylistData = await TheGamesDbSource.filterByCategory(inputValue);
      const gamesCategoryContainer = document.querySelector('#game-category-container');
      gamesCategorylistData.forEach((game) => {
        gamesCategoryContainer.innerHTML += createGameByCategory(game);
      });
    }
    buttonValue.addEventListener('click', getValue);
  },
};

export default categoryList;
