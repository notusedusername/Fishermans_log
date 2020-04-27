import {Dispatcher} from "flux";

class CatchDispatcher extends Dispatcher{
    handleViewAction(command){
        this.dispatch({
            actionType: 'VIEW_ACTION',
            command: command
        });
    }
}

const catchDispatcher = new CatchDispatcher();
export default catchDispatcher;