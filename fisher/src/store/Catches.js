import EventEmitter from 'events';
import dispatcher from "../dispatchers/Dispatcher";

const axios = require('axios');

class CatchStore extends EventEmitter{
    _catches = [];

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

const catchStore = new CatchStore();

dispatcher.register((action) => {

    if(action.command.commandType === 'POST_CATCH'){
        let item = action.command.item;
        axios.post('http://localhost:3001/catches', {
            fisherman: item.fisherman,
            location: item.location,
            timestamp: new Date(Date.now()).toISOString(),
            weight: item.weight,
            species: item.species
        })
            .then((res) => {
                console.log(res);
                catchStore.emitChange();

            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if(action.command.commandType === 'GET_CATCH'){
        let params = action.command.params;
        axios.get('http://localhost:3001/catches' + queryParams(params))
            .then((res) => {
                console.log(res);
                Object.assign(catchStore._catches, res.data);
                catchStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });

    }

});

export default catchStore;


var queryParams = (params) => {
    if(params){
        var fisherman = params.id ? 'fisherman=' + params.id : '';
        var location = params.location ? 'location=' + params.location : '';
        var weight = params.weight ? 'weight=' + params.weight : '';
        var species = params.species ? 'species=' + params.species : '';
        var toReturn = fisherman + location + weight + species;
        return toReturn ? '?' + toReturn : '';
    }
    else {
        return ''
    }
};