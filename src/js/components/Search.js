import { select } from '../settings.js';
import Initializer from './Initializer.js';



class Search{
  constructor(data){
    const thisSearch = this;

    thisSearch.getElements();
    thisSearch.initActions(data);
  }

  getElements(){
    const thisSearch = this;

    thisSearch.dom = {};
    thisSearch.dom.wrapper = document.querySelector(select.containerOf.search);

    thisSearch.dom.input = thisSearch.dom.wrapper.querySelector(select.widgets.search.input);
    thisSearch.dom.search = thisSearch.dom.wrapper.querySelector(select.widgets.search.search);
    thisSearch.dom.searchInfo = thisSearch.dom.wrapper.querySelector('.search-info');

    thisSearch.dom.songList = thisSearch.dom.wrapper.querySelector(select.containerOf.songList.search);
  }

  initActions(songList){
    const thisSearch = this;

    thisSearch.dom.search.addEventListener('click', function(event){
      event.preventDefault();

      //initiate filtered list
      const filteredList = thisSearch.filterSongs(songList, thisSearch.dom.input.value);

      //Show search info
      thisSearch.dom.searchInfo.innerHTML = 'We have found ' + filteredList.length + ' songs...';
      
      //initialize based on search
      thisSearch.initSongs(filteredList);
    });

  }

  filterSongs(songList, inputValue){

    const matchingSongs = [];

    for(let song of songList){

      //all to lower case to ease search
      const compareSong = song.filename.toLowerCase();
      const compareValue = inputValue.toLowerCase();

      //if lower lower case strings match, update matchingSongs array (for every song)
      if(compareSong.includes(compareValue)){
        matchingSongs.push(song);
      }
    }

    return matchingSongs;
  }

  initSongs(data){
    const thisSearch = this;

    const songListContainer = select.containerOf.songList.search;

    new Initializer(data, songListContainer);
  }
}

export default Search;