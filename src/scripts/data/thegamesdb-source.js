import API_ENDPOINT from '../globals/api-endpoint';

class TheGamesDbSource {
  static async recommendedGame() {
    const response = await fetch(API_ENDPOINT.LIST, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async newRelease() {
    const response = await fetch(API_ENDPOINT.NEW_RELEASE, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async filterByCategory(key) {
    const response = await fetch(API_ENDPOINT.FILTER_BY_CATEGORY(key), {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async gameList() {
    const response = await fetch(API_ENDPOINT.GAME_LIST, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailGame(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async gameBasePcPlatform() {
    const response = await fetch(API_ENDPOINT.WINDOWS_PLATFORM_GAME, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async gameBaseBroswerPlatform() {
    const response = await fetch(API_ENDPOINT.BROSWER_PLATFORM_GAME, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '9ce78c45f0msh8119d081e8770bap135562jsn53e73a0bc17f',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheGamesDbSource;
