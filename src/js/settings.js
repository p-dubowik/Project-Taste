export const select = {
  templateOf: {
    song: '#template-song-div',
  },
  containerOf: {
    songList: '.song-list',
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
  song: Handlebars.compile(document.querySelector(select.templateOf.song)),
};