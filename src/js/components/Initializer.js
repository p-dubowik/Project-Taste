import { select, templates } from '../settings.js';
import { utils } from '../utils.js';


class Initializer {
  constructor(data, songListWrapper) {
    const thisInit = this;

    thisInit.data = data;

    thisInit.render(songListWrapper);
  }

    

  render(container){
    const thisInit = this;

    //prepare songList container
    const wrapper = document.querySelector(container);

    //clear container before actual initialization
    wrapper.innerHTML = '';

    for(let song of thisInit.data){
      const generatedHTML = templates.song(song);

      thisInit.element = utils.createDOMFromHTML(generatedHTML);


      wrapper.appendChild(thisInit.element);
    }

    thisInit.initPlayers(wrapper);
  }

  initPlayers(wrapper){

    const players = wrapper.querySelectorAll(select.containerOf.songPlayer);

    for(let player of players){
      new GreenAudioPlayer(player, {
        stopOthersOnPlay: true,
      });
    }
  }

}




export default Initializer;