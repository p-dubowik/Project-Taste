import { select, settings, templates } from './settings.js';
import { utils } from './utils.js';
import Initializer from './components/Initializer.js';
import Home from './components/HomePage.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';



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
        //console.log(thisApp.data.songs)

        //Works for now || CHANGE LATER
        // new Initializer(thisApp.data.songs);
        // const songPlayers = thisApp.dom.wrapper.querySelectorAll(select.containerOf.songPlayer);
        // thisApp.initPlayers(songPlayers);

        thisApp.initHome(thisApp.data.songs);
        thisApp.initDiscover(thisApp.data.songs);
        thisApp.initSearch(thisApp.data.songs);

      })
    },



  initHome: function(data){
    new Home(data);
  },

  initDiscover: function(data){
    new Discover(data);
  },

  initSearch: function(data){
    new Search(data);
  },

  init: function(){
    const thisApp = this;

    thisApp.getElements();
    thisApp.initData();
  }
};

app.init();