import { select } from '../settings.js';
import Initializer from './Initializer.js';

class Discover{
  constructor(data){
    const thisDiscover = this;

    thisDiscover.initSongs(data);
  }

  initSongs(data){
    const thisDiscover = this;

    const songListContainer = select.containerOf.songList.discover;
    const randomSong = thisDiscover.randomizeData(data);


    new Initializer(randomSong, songListContainer);
  }

  randomizeData(data){
    const randomNumber = Math.floor(Math.random() * data.length);

    //Assign an array with 1 item to randomSong in order to always give Initializer an array
    const randomSong = new Array(data[randomNumber]);

    return randomSong;
  }
}

export default Discover;