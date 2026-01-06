import { select, templates } from "../settings.js";
import { utils } from "../utils.js";


class Initializer {
    constructor(data, songListWrapper) {
        const thisInit = this;

        thisInit.data = data;

        thisInit.render(songListWrapper);
    }
    

    render(container){
        const thisInit = this;

        console.log(thisInit.data);

        for(let song of thisInit.data){
            const generatedHTML = templates.song(song);

            thisInit.element = utils.createDOMFromHTML(generatedHTML);

            const wrapper = document.querySelector(container);

            wrapper.appendChild(thisInit.element);
        }

        thisInit.initPlayers(document.querySelectorAll(select.containerOf.songPlayer));

    }

  initPlayers(songPlayerWrapper){
    const thisInit = this;

    for(let player of songPlayerWrapper){
      new GreenAudioPlayer(player, {
        stopOthersOnPlay: true,
      });
    }
  }

}




export default Initializer;