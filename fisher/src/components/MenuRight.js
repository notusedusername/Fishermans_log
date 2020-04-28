import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import LoginAction from "../actions/LoginAction";
import dispatcher from "../dispatchers/Dispatcher";

const axios = require('axios')

class MenuRight extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            id: ''
        };
    }

    componentDidMount() {
        LoginAction.getStatus(this)
    }

    render() {
        console.log(this.state.id);
        if(this.state.id !== ''){
            return (
                <Nav>
                    <NavDropdown alignRight title="Dropdown" id="basic-nav-dropdown" >
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href={"/catches?fisherman="+this.state.id}>My catches</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={()=>LoginAction.logout()}>Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            );
        }
        else {
            return (
                <Nav>
                    <Nav.Link href="/login" >Login</Nav.Link>
                    <Nav.Link href="/no">Register</Nav.Link>
                </Nav>
            )
        }
    }
}

export default MenuRight;

dispatcher.register((action) => {
    if(action.command.commandType === 'LOGOUT'){
        axios.post('http://localhost:3001/user', {id: ''})
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else if(action.command.commandType === 'LOGIN') {
        axios.post('http://localhost:3001/user', {id: action.command.id})
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else if(action.command.commandType === 'STATUS'){
        axios.get('http://localhost:3001/user')
            .then((res) => {
                console.log(res.data);
                action.command.item.setState(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});