import catchDispatcher from "../dispatchers/CatchDispatcher";

class CatchActions {
    getLocations(){
        catchDispatcher.handleViewAction({
            commandType: 'GET_LOC_LIST'
        });
    }

    postCatch(item){
        catchDispatcher.handleViewAction({
            commandType: "POST_CATCH",
            item: item
        })
    }
}

export default new CatchActions()