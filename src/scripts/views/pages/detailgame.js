import TheGamesDbSource from '../../data/thegamesdb-source';
import { createGameByCategory } from '../templates/templeate-creator';

const categoryList = {
  async render() {
    return `
        <div class="game-detail">
            <div class="gameThumbnail">
                <div class="gameThumbnailBG">
                    <img src="https://www.freetogame.com/g/474/thumbnail.jpg" alt="GameTitle">
                        <video class="featuredVideo" autoplay loop muted alt="RocketLeague Trailer">
                        <source src="https://www.freetogame.com/g/474/videoplayback.webm" type="video/webm">
                    </video>
                </div>
            </div>

            <div class="gameDescription container">
                <div class="gamePlatform mt-4">
                    <span class="platform">Windows</span>
                </div>

                <div class="gameTitle py-3 row">
                    <div class="col">
                        <h2 class="gameName">Rocket League</h2>
                        <span class="gameCategory">Status: Live</span>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <button class="playNow px-5 fw-bold btn-outline-warning"><a href="">Play Now</a></button>
                    </div>
                </div>
            
                <div class="gameDescription py-3">
                    <h3 class="heading">About Rocket League</h3>
                    <hr>
                    <p>Get your car-soccer gaming on for free with Psyonixs Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players. It includes both online casual and competitive modes as well as a fully-featured offline season mode. Players can also create custom matches using “Mutators” that allow them to change the rules, or play existing hockey and basketball-inspired modes.\r\n\r\nThe game offers a Rocket Pass option for serious players, which includes a 50%XP bonus and up to 70 special rewards like a new battle-car, keys, and more. There is also a challenge system that rewards players for participating in online matches and completing weekly challenges. Players can also purchase epsorts customization item in the Rocket League Esports Shop.\r\n</p>
                </div>
            
                <div class="infoGroup row">
                    <div class="col">
                        <div class="gameGallery py-3">
                            <h3 class="heading">Game Screenshots</h3>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://www.freetogame.com/g/474/rocket-league-1.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://www.freetogame.com/g/474/rocket-league-2.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://www.freetogame.com/g/474/rocket-league-3.jpg" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="gameInformation py-3">
                            <h3 class="heading">Additional Information</h3>
                            <hr>
                            <div class="row">
                                <div class="col">
                                    <h4 class="gameTag">Title</h4>
                                    <p class="tagInfo">Rocket League</p>

                                    <h4 class="gameTag">Publisher</h4>
                                    <p class="tagInfo">Psyonix LLC</p>
                        
                                    <h4 class="gameTag">Genre</h4>
                                    <p class="tagInfo">Sports</p>
                                </div>
                                <div class="col">
                                    <h4 class="gameTag">Developer</h4>
                                    <p class="tagInfo">Psyonix LLC</p>
                            
                                    <h4 class="gameTag">Release Date</h4>
                                    <p class="tagInfo">September 24, 2020</p>
                            
                                    <h4 class="gameTag">Platform</h4>
                                    <p class="tagInfo">Windows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gameSpecs py-3">
                    <h3 class="heading">Minimum System Requirements (Windows)</h3>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <h4 class="gameTag">OS</h4>
                            <p class="tagInfo">Windows 7 (64 bit) or Newer (64 bit) Windows OS</p>

                            <h4 class="gameTag">Memory</h4>
                            <p class="tagInfo">4GB</p>
                    
                            <h4 class="gameTag">Storage</h4>
                            <p class="tagInfo">20GB</p>
                        </div>
                        <div class="col">
                            <h4 class="gameTag">Processor</h4>
                            <p class="tagInfo">2.5 GHz Dual core</p>
                    
                            <h4 class="gameTag">Graphics</h4>
                            <p class="tagInfo">NVIDIA GeForce 760, AMD Radeon R7 270X, or better</p>

                            <h4 class="gameTag">Additional Notes</h4>
                            <p class="tagInfo">Specifications may change during development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const buttonValue = document.querySelector('#clickButton');

    async function getValue() {
      const inputValue = document.querySelector('#value').value;
      const gamesCategorylistData = await TheGamesDbSource.filterByCategory(inputValue);
      const gamesCategoryContainer = document.querySelector('#game-category-container');
      gamesCategorylistData.slice(0, 3).forEach((game) => {
        gamesCategoryContainer.innerHTML += createGameByCategory(game);
      });
    }
    buttonValue.addEventListener('click', getValue);
  },
};

export default categoryList;
