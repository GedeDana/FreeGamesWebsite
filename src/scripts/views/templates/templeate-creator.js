const createGamesRecomendation = (game) => `
<div class="col">
  <div class="card">
    <img src="${game.thumbnail}" class="card-img-top" alt="Valorant">
    <div class="card-body">
      <h4 class="card-text">${game.title}</h4>
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
        <h5 class="card-title">${game.title}</h5>
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
        <h5 class="card-title">${game.title}</h5>
        <p class="card-text">${game.short_description}</p>
        <p class="card-text"><small class="text-muted">${game.genre}</small></p>
      </div>
    </div>
  </div>
</div>
`;
export { createGamesRecomendation, createGameNewRelase, createGameByCategory };
