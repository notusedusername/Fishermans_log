import React from "react";
import profile from "../store/ProfileStore";
import {Card, Accordion, Button} from "react-bootstrap";
import equipment_items from "../store/EquipmentStore";
import EquipmentActions from "../actions/EquipmentActions";

class EquipmentItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            equipment: []
        };
        this.onChangeOfEquipment = this.onChangeOfEquipment.bind(this);
    }
    onChangeOfEquipment(){
        this.setState({
            equipment: profile._equipment
        });
    }


    componentDidMount() {
        profile.addChangeListener(this.onChangeOfEquipment);
        EquipmentActions.getEquipmentItems();
    }

    componentWillUnmount() {
        profile.removeChangeListener(this.onChangeOfEquipment);
    }


    render() {
        const equipment = this.state.equipment;
        return (
            equipment.map((item) => {
                return (
                    <Card>
                        <Card.Header>
                            {item.name}<br/>
                            <Accordion.Toggle as={Button} variant={"link"} eventKey="0">
                                General description
                            </Accordion.Toggle>
                            <Accordion.Toggle as={Button} variant={"link"} eventKey="1">
                                My story
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{item.general_description}</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>{item.personal_description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                );
            })
        );
    }
};

export default EquipmentItem;
