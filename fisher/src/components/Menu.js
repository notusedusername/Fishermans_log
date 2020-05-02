import React from "react";
import {Navbar, Toast, Nav} from "react-bootstrap";
import MenuRight from "./MenuRight";
import message from "../store/Message";
import MessageActions from "../actions/MessageActions";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            show: false,
            text: ''
        };
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    toggleToast = () => {
        MessageActions.toggleMessage({
            show: false,
            text: ''
        })
    };

    onChangeMessage = () => {
        this.setState(message._message);
    };

    componentDidMount() {
        message.addChangeListener(this.onChangeMessage);
    }

    componentWillUnmount() {
        message.removeChangeListener(this.onChangeMessage);
    }

    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img src="logoIFA.png" alt={"IFA"} id={"logo"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/catch">Record Catch</Nav.Link>
                        <Nav.Link href="/catches">List Catches</Nav.Link>

                    </Nav>
                    <MenuRight/>
                </Navbar.Collapse>
            </Navbar>
            <Toast show={this.state.show} onClose={this.toggleToast} autohide delay={3000}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">IFA</strong>
                </Toast.Header>
                <Toast.Body>{this.state.text}</Toast.Body>
            </Toast>
            </div>
        );
    }
}

export default Menu