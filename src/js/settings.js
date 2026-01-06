export const select = {
  templateOf: {
    song: '#template-song-div',
  },
  containerOf: {
    songList: {
      home: '.home .song-list',
      discover: '.discover .song-list',
      search: '.search .song-list',
    },
    songPlayer: '.song-player',
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