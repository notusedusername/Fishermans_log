import dispatcher from "../dispatchers/Dispatcher";

const axios = require('axios');

let locations = [];

export default locations

dispatcher.register((action) => {
    if (action.command.commandType === 'GET_LOC_LIST') {
        axios.get('http://localhost:3001/locations')
            .then((res) => {
                Object.assign(locations, res.data.map(entry => {
                    return {value: entry.id, label: entry.name}
                }));
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
