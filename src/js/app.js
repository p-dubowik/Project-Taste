import { select, settings, templates } from './settings.js';
import { utils } from './utils.js';




const app = {

  getElements: function(){
    const thisApp = this;

    thisApp.dom = {};

    thisApp.dom.wrapper = document;

    thisApp.dom.songContainers = thisApp.dom.wrapper.querySelectorAll(select.containerOf.songPlayer);


  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;


    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        //console.log(parsedResponse);
        thisApp.data.songs = parsedResponse;
        thisApp.renderSongs();
      })

  },

  renderSongs: function(container){
    const thisApp = this;


  },

  initPlayers: function(container){
    const thisApp = this;

    for(let player of container){
      new GreenAudioPlayer(player, {
        stopOthersOnPlay: true,
      });
    }
  },

  init: function(){
    const thisApp = this;

    thisApp.getElements();
    thisApp.initData();
    thisApp.initPlayers(thisApp.dom.songContainers);
  }
};

app.init();