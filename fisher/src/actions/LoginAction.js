import dispatcher from "../dispatchers/Dispatcher";

class LoginAction {
    login(loginData){
        dispatcher.handleViewAction({
            commandType: 'LOGIN',
            id: loginData.id
        });
    }

    logout(){
        dispatcher.handleViewAction({
            commandType: "LOGOUT"
        })
    }

    getStatus(item){
        dispatcher.handleViewAction({
            commandType: "STATUS",
            item: item
        })
    }
}

export default new LoginAction()