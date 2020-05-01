import React from "react";
import CatchActions from "../actions/CatchActions";
import catchStore from "../store/Catches";
import Filter from "./Filter";
import LocationActions from "../actions/LocationActions";
import FishermanActions from "../actions/FishermanActions";
import {Accordion, Button, Card, Table} from "react-bootstrap";


class CatchList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            catches: []
        };
        this.onChangeOfCatches = this.onChangeOfCatches.bind(this);

    }

    onChangeOfCatches(){
        this.setState({
            catches: catchStore._catches,
        });
    }

    componentDidMount() {
        catchStore.addChangeListener(this.onChangeOfCatches);
        LocationActions.getLocations();
        FishermanActions.getAllFisherman();
        CatchActions.getCatch(this.state.filter);
    }

    componentWillUnmount() {
        catchStore.removeChangeListener(this.onChangeOfCatches);
    }

    render() {
        return (
            <div id={"catches"}>
                <Filter/>
                <table  className={"table table-light table-bordered table-striped"}>
                    <thead>
                    <tr>
                        <th>Fisherman</th>
                        <th>Location</th>
                        <th>Timestamp</th>
                        <th>Species</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.catches.map((item) =>{
                            return (
                            <tr id={item.id}>
                                <td>
                                    <Accordion>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant={"link"} eventKey="0">
                                                    {item.fisherman.firstName} {item.fisherman.lastName}
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Table responsive>
                                                        <tr>
                                                            <td>Country</td>
                                                            <td>{item.fisherman.country}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>City</td>
                                                            <td>{item.fisherman.city}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td>{item.fisherman.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Country</td>
                                                            <td>{item.fisherman.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Country</td>
                                                            <td>{item.fisherman.telephone}</td>
                                                        </tr>
                                                    </Table>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </td>
                                <td><Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant={"link"} eventKey="0">
                                                {item.location.name}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Table responsive>
                                                    <tr>
                                                        <td>Coordinates</td>
                                                        <td>{item.location.coordinates}</td>
                                                    </tr>
                                                </Table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion></td>
                                <td>{item.timestamp}</td>
                                <td>{item.species}</td>
                                <td>{item.weight} g</td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CatchList;