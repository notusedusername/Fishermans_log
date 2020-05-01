import React from "react";
import Select from 'react-select';
import locationStore from "../store/Locations";

class LocationSelect extends React.Component {

    constructor() {
        super();
        this.state={
            locations : []
        };
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    componentDidMount() {
        locationStore.addChangeListener(this.onLocationChange)
    }

    componentWillUnmount() {
        locationStore.removeChangeListener(this.onLocationChange)
    }

    onLocationChange() {
        this.setState({
            locations: locationStore._locations
        })
    }



    render() {
        return (
            <Select options={locationStore._locations.map(entry => {
                return {value: entry.id, label: entry.name}
            })}
                    isSearchable={true}/>
        );
    }
}

export default LocationSelect;