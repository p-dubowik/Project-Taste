import { select, settings } from './settings.js';
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

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');
    
    let pageMatchingHash = thisApp.pages[0].id;
    
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get id from href attr */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;

      });
    }

    window.addEventListener('hashchange', function(){
      const idFromHash = this.window.location.hash.replace('#/', '');
      thisApp.activatePage(idFromHash);
    });

  },
  
  activatePage: function(pageId){
    const thisApp = this;

    /* add class active to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(select.classNames.active, page.id == pageId);
    }
    /* add class active to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        select.classNames.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
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

        thisApp.data.songs = parsedResponse;

        thisApp.updateData(thisApp.data.songs);
        thisApp.initHome(thisApp.data.songs);
        thisApp.initDiscover(thisApp.data.songs);
        thisApp.initSearch(thisApp.data.songs);

      });
  },

  updateData: function(data){

    for(let song of data){
      const authorNameArray = song.filename.replace('.mp3', '').split('_');
      const authorName = authorNameArray.slice(-2).toString().replace(',', ' ');

      song.authorName = authorName;
    }
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

    thisApp.initPages();
    thisApp.getElements();
    thisApp.initData();
  }
};

app.init();