import { select } from "../settings.js";
import Initializer from "./Initializer.js";

class Home{
    constructor(data){
        const thisHome = this;

        thisHome.initSongs(data);
    }


    initSongs(data){
        const thisHome = this;

        const songListContainer = select.containerOf.songList.home;

        new Initializer(data, songListContainer);
    }


}

export default Home;