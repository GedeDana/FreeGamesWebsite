const createGamesRecomendation = (game) => `
<div class="col">
  <a href="${`/#/detail/${game.id}`}">
    <div class="card">
      <img src="${game.thumbnail}" class="card-img-top" alt="${game.thumbnail}">
      <div class="card-body">
        <h4 class="card-text box-title">${game.title}</h4>
    </div>
  </a>
</div>
`;

const createGameNewRelase = (game) => `
<a href="${`/#/detail/${game.id}`}">
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-lg-4 col-md-6">
        <img src="${game.thumbnail}" class="img-fluid rounded-start card-img" alt="${game.title} pitcure">
      </div>
      <div class="col-lg-8 col-md-6">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text">${game.short_description}</p>
          <p class="card-text"><small class="text-muted">${game.genre}</small></p>
        </div>
      </div>
    </div>
  </div>
</a>
`;

const createGameByCategory = (game) => `
<a href="${`/#/detail/${game.id}`}">
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-lg-4 col-md-6">
        <img src="${game.thumbnail}" class="img-fluid rounded-start card-img" alt="${game.title} pitcure">
      </div>
      <div class="col-lg-8 col-md-6">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text">${game.short_description}</p>
          <p class="card-text"><small class="text-muted">${game.genre}</small></p>
        </div>
      </div>
    </div>
  </div>
</a>
`;

const createGameByBookmark = (game) => `
<a href="${`/#/detail/${game.id}`}">
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-lg-4 col-md-6">
        <img src="${game.thumbnail}" class="img-fluid rounded-start card-img" alt="${game.title} pitcure">
      </div>
      <div class="col-lg-8 col-md-6">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text">${game.short_description}</p>
          <p class="card-text"><small class="text-muted">${game.genre}</small></p>
        </div>
      </div>
    </div>
  </div>
</a>
`;

const createDetailGames = (game) => `
<div class="gameThumbnail">
  <div class="gameThumbnailBG">
    <img src="${game.thumbnail}" alt="GameTitle">
      <video class="featuredVideo" autoplay loop muted alt="RocketLeague Trailer">
      <source src="https://www.freetogame.com/g/${game.id}/videoplayback.webm" type="video/webm">
    </video>
  </div>
</div>

<div class="gameDescription container">
  <div class="gamePlatform mt-4">
    <span class="platform">${game.platform}</span>
  </div>

  <div class="gameTitle py-3 row">
    <div class="col">
      <h2 class="gameName">${game.title}</h2>
      <span class="gameCategory">Status: ${game.status}</span>
    </div>
    <div class="col d-flex justify-content-end">
      <div id="bookmarkButtonContainer"></div>
      <button class="playNow px-5 fw-bold btn-outline-warning"><a href="${game.game_url}">Play Now</a></button>
    </div>
  </div>

  <div class="gameDescription py-3">
    <h3 class="heading">About ${game.title}</h3>
    <hr>
    <p>${game.description}</p>
  </div>

  <div class="infoGroup row">
    <div class="col">
      <div class="gameGallery py-3">
        <h3 class="heading">Game Screenshots</h3>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${game.screenshots[0].image}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="${game.screenshots[1].image}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${game.screenshots[2].image}" class="d-block w-100" alt="...">
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
            <p class="tagInfo">${game.title}</p>

            <h4 class="gameTag">Publisher</h4>
            <p class="tagInfo">${game.publisher}</p>
      
            <h4 class="gameTag">Genre</h4>
            <p class="tagInfo">${game.genre}</p>
          </div>
          <div class="col">
            <h4 class="gameTag">Developer</h4>
            <p class="tagInfo">${game.developer}</p>
          
            <h4 class="gameTag">Release Date</h4>
            <p class="tagInfo">${game.release_date}</p>
          
            <h4 class="gameTag">Platform</h4>
            <p class="tagInfo">${game.platform}</p>
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
        <p class="tagInfo">${game.minimum_system_requirements.os}</p>

        <h4 class="gameTag">Memory</h4>
        <p class="tagInfo">${game.minimum_system_requirements.memory}</p>
  
        <h4 class="gameTag">Storage</h4>
        <p class="tagInfo">${game.minimum_system_requirements.storage}</p>
      </div>
      <div class="col">
        <h4 class="gameTag">Processor</h4>
        <p class="tagInfo">${game.minimum_system_requirements.processor}</p>
  
        <h4 class="gameTag">Graphics</h4>
        <p class="tagInfo">${game.minimum_system_requirements.graphics}</p>

        <h4 class="gameTag">Additional Notes</h4>
        <p class="tagInfo">Specifications may change during development</p>
      </div>
    </div>
  </div>
</div>`;

const createDetailGamesNoMinimumSpec = (game) => `
<div class="gameThumbnail">
<div class="gameThumbnailBG">
  <img src="${game.thumbnail}" alt="GameTitle">
    <video class="featuredVideo" autoplay loop muted alt="RocketLeague Trailer">
    <source src="https://www.freetogame.com/g/${game.id}/videoplayback.webm" type="video/webm">
  </video>
</div>
</div>

<div class="gameDescription container">
<div class="gamePlatform mt-4">
  <span class="platform">${game.platform}</span>
</div>

<div class="gameTitle py-3 row">
  <div class="col">
    <h2 class="gameName">${game.title}</h2>
    <span class="gameCategory">Status: ${game.status}</span>
  </div>
  <div class="col d-flex justify-content-end">
    <div id="bookmarkButtonContainer"></div>
    <button class="playNow px-5 fw-bold btn-outline-warning"><a href="${game.game_url}">Play Now</a></button>
  </div>
</div>

<div class="gameDescription py-3">
  <h3 class="heading">About ${game.title}</h3>
  <hr>
  <p>${game.description}</p>
</div>

<div class="infoGroup row">
  <div class="col">
    <div class="gameGallery py-3">
      <h3 class="heading">Game Screenshots</h3>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${game.screenshots[0].image}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
              <img src="${game.screenshots[1].image}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${game.screenshots[2].image}" class="d-block w-100" alt="...">
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
          <p class="tagInfo">${game.title}</p>

          <h4 class="gameTag">Publisher</h4>
          <p class="tagInfo">${game.publisher}</p>
    
          <h4 class="gameTag">Genre</h4>
          <p class="tagInfo">${game.genre}</p>
        </div>
        <div class="col">
          <h4 class="gameTag">Developer</h4>
          <p class="tagInfo">${game.developer}</p>
        
          <h4 class="gameTag">Release Date</h4>
          <p class="tagInfo">${game.release_date}</p>
        
          <h4 class="gameTag">Platform</h4>
          <p class="tagInfo">${game.platform}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="gameSpecs py-3">
  <h3 class="heading">Minimum System Requirements</h3>
  <hr>
  <div class="row">
    <div class="col">
      <p>${game.title} is a browser based game and should run smoothly on any PC with a updated web-browser such as Firefox, Chrome, or Mircosoft Edge. </p>
      <br>
      <p>If you have old hardware or software, you may still be able to play, but your game experience may suffer.</p>
    </div>
  </div>
</div>
</div>
`;

const createDetailGamesNoPitcure = (game) => `
<div class="gameThumbnail">
<div class="gameThumbnailBG">
  <img src="${game.thumbnail}" alt="GameTitle">
    <video class="featuredVideo" autoplay loop muted alt="RocketLeague Trailer">
    <source src="https://www.freetogame.com/g/${game.id}/videoplayback.webm" type="video/webm">
  </video>
</div>
</div>

<div class="gameDescription container">
<div class="gamePlatform mt-4">
  <span class="platform">${game.platform}</span>
</div>

<div class="gameTitle py-3 row">
  <div class="col">
    <h2 class="gameName">${game.title}</h2>
    <span class="gameCategory">Status: ${game.status}</span>
  </div>
  <div class="col d-flex justify-content-end">
    <div id="bookmarkButtonContainer"></div>
    <button class="playNow px-5 fw-bold btn-outline-warning"><a href="${game.game_url}">Play Now</a></button>
  </div>
</div>

<div class="gameDescription py-3">
  <h3 class="heading">About ${game.title}</h3>
  <hr>
  <p>${game.description}</p>
</div>

<div class="infoGroup row">
  <div class="col">
    <div class="gameInformation py-3">
      <h3 class="heading">Additional Information</h3>
      <hr>
      <div class="row">
        <div class="col">
          <h4 class="gameTag">Title</h4>
          <p class="tagInfo">${game.title}</p>

          <h4 class="gameTag">Publisher</h4>
          <p class="tagInfo">${game.publisher}</p>
    
          <h4 class="gameTag">Genre</h4>
          <p class="tagInfo">${game.genre}</p>
        </div>
        <div class="col">
          <h4 class="gameTag">Developer</h4>
          <p class="tagInfo">${game.developer}</p>
        
          <h4 class="gameTag">Release Date</h4>
          <p class="tagInfo">${game.release_date}</p>
        
          <h4 class="gameTag">Platform</h4>
          <p class="tagInfo">${game.platform}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="gameSpecs py-3">
  <h3 class="heading">Minimum System Requirements</h3>
  <hr>
  <div class="row">
    <div class="col">
      <p>${game.title} is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
      <br>
      <p>If you have old hardware or software, you may still be able to play Elvenar, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
    </div>
  </div>
</div>
</div>
`;

const createGameBasePlatformPc = () => `    
  <div class="col">
    <div class="card bg-dark text-white platform">
      <img src="/temp-img/valo.png" class="card-img" alt="Windows">
      <div class="card-img-overlay">
        <h5 class="card-title"><a href="/#/windows/">Windows</a></h5>
      </div>
    </div>
  </div>
`;
const createGameBasePlatformBroswer = () => `    
  <div class="col">
    <div class="card bg-dark text-white platform">
      <img src="/temp-img/valo.png" class="card-img" alt="Windows">
      <div class="card-img-overlay">
        <h5 class="card-title"><a href="/#/windows/">Web Broswer</a></h5>
      </div>
  </div>
`;

const createBookmarkGamesTemplate = () => `
  <button arial-label="bookmark this game" id="bookmarkButton" class="bookmark">
    <i class="far fa-bookmark"></i> 
  </button>
`;
const createUnbookmarkGamesTemplate = () => `
  <button arial-label="unbookmark this game" id="bookmarkButton" class="bookmark">
    <i class="fas fa-bookmark"></i>
  </button>
`;

export {
  createGamesRecomendation,
  createGameNewRelase,
  createGameByCategory,
  createDetailGames,
  createDetailGamesNoMinimumSpec,
  createDetailGamesNoPitcure,
  createGameBasePlatformPc,
  createGameBasePlatformBroswer,
  createBookmarkGamesTemplate,
  createUnbookmarkGamesTemplate,
  createGameByBookmark,
};
