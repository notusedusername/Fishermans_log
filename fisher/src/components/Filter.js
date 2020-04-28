import React from "react";
import {Button, Form, FormControl} from "react-bootstrap";

class Filter extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: ''
        }
    }

    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        );
    }
}

export default Filter