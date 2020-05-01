import dispatcher from "../dispatchers/Dispatcher";
import profile from "../store/ProfileStore"
const axios = require('axios');

class ProfileActions{
    getProfile(item){
        dispatcher.handleViewAction({
            commandType: 'GET_PROFILE',
            item: item
        });
    }
}

export default new ProfileActions()

dispatcher.register((action) => {
   if(action.command.commandType === 'GET_PROFILE'){
       var id = action.command.item.id;
       axios.get('http://localhost:3001/fishermans' + (id ? '?id=' + id : ''))
           .then((res) => {
               console.log("http://localhost:3001/fishermans" + (id ? '?id=' + id : ''));
               console.log(res.data[0]);
                profile._profile = res.data[0];
                profile.emitChange();

           })
           .catch((err) => {
               console.log(err);
           });

   }
});