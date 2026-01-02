import { select } from './settings.js';




const app = {

  getElements: function(){
    const thisApp = this;

    thisApp.dom = {};

    thisApp.dom.wrapper = document;

    thisApp.dom.songContainers = thisApp.dom.wrapper.querySelectorAll(select.containerOf.songPlayer);


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
    thisApp.initPlayers(thisApp.dom.songContainers);
  }
};

app.init();