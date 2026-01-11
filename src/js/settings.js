export const select = {
  templateOf: {
    song: '#template-song-div',
  },
  containerOf: {
    home: '#home',
    search: '#search',
    discover: '#discover',
    songList: {
      home: '.home .song-list',
      discover: '.discover .song-list',
      search: '.search .song-list',
    },
    songPlayer: '.song-player',
  },
  widgets: {
    search: {
      input: '.search-bar input',
      search: '.search-bar a',
    },
  },
  homePage: {
    joinButton: '.join-button',
  },
};

export const settings = {
  db: {
    url: '//localhost:3131',
    songs: 'songs',
  },
};

export const templates = {
  song: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML),
};