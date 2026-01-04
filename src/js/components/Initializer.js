import { select, templates } from "../settings.js";
import { utils } from "../utils.js";


class Initializer {
    constructor(data) {
        const thisInit = this;

        thisInit.data = data;

        thisInit.test();
    }
    

    test(){
        const thisInit = this;

        console.log(thisInit.data);

        for(let song of thisInit.data){
            const generatedHTML = templates.song(song);

            thisInit.element = utils.createDOMFromHTML(generatedHTML);


            const container = document.querySelector(select.containerOf.songList);

            container.appendChild(thisInit.element);
        }

    }



}




export default Initializer;