import React from "react";
import {Navbar, NavDropdown, Nav} from "react-bootstrap";
import MenuRight from "./MenuRight";

class Menu extends React.Component {

    render() {
        return (<Navbar bg="light" expand="lg">
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
        );
    }
}

export default Menu