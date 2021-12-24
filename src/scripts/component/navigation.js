class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/#">
          <img src="/icons/logo-name.png" alt="FreeGamesForU">
        </a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form class="d-flex forms my-2 mx-3">
            <input class="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" id="value">
            <button class="btn btn-outline-warning" type="submit" id="clickButton"><a href="/#/category">Search</a></button>
          </form>
          <hr>
          <ul class="navbar-nav me-2 mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link mx-3" id="navlist" href="/#">Home</a>
            </li>
            <hr>
            <li class="nav-item">
              <a class="nav-link mx-3" id="navlist" href="/#/list">Game List</a>
            </li>
            <hr>
            <li>
              <a class="nav-link myLibrary px-4 btn-outline-warning" id="navlist" href="/#/bookmark">My Library</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('nav-info', Navigation);
