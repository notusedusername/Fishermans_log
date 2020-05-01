import React from "react";
import CatchActions from "../actions/CatchActions";
import catchStore from "../store/Catches";
import Filter from "./Filter";
import LocationActions from "../actions/LocationActions";
import FishermanActions from "../actions/FishermanActions";


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
                                <td>{item.fisherman.fistName}</td>
                                <td>{item.location.name}</td>
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