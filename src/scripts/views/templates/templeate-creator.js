const createGamesRecomendation = (game) => `
<div class="col">
  <div class="card">
    <img src="${game.thumbnail}" class="card-img-top" alt="Valorant">
    <div class="card-body">
      <h4 class="card-text"><a href="${`/#/detail/${game.id}`}">${game.title}</a></h4>
    </div>
  </div>
`;

const createGameNewRelase = (game) => `
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${game.thumbnail}" class="img-fluid rounded-start" alt="${game.title} pitcure">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><a href="${`/#/detail/${game.id}`}">${game.title}</a></h5>
        <p class="card-text">${game.short_description}</p>
        <p class="card-text"><small class="text-muted">${game.genre}</small></p>
      </div>
    </div>
  </div>
</div>
`;

const createGameByCategory = (game) => `
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${game.thumbnail}" class="img-fluid rounded-start" alt="${game.title} pitcure">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><a href="${`/#/detail/${game.id}`}">${game.title}</a></h5>
        <p class="card-text">${game.short_description}</p>
        <p class="card-text"><small class="text-muted">${game.genre}</small></p>
      </div>
    </div>
  </div>
</div>
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
</div>



`;
export {
  createGamesRecomendation,
  createGameNewRelase,
  createGameByCategory,
  createDetailGames,
};
