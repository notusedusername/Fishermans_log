import dispatcher from "../dispatchers/Dispatcher";
import EventEmitter from "events";

const axios = require('axios');

let locations = [];

class LocationStore extends EventEmitter{
    _locations = [];

    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.addListener('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }


}

const locationStore = new LocationStore();
export default locationStore;

dispatcher.register((action) => {
    if (action.command.commandType === 'GET_LOC_LIST') {
        axios.get('http://localhost:3001/locations')
            .then((res) => {
                locationStore._locations = res.data;
                locationStore.emitChange();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
