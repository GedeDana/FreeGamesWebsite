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
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
