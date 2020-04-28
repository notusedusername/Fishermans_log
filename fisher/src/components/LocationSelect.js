import React from "react";
import Select from 'react-select';
import locations from "../store/Locations";

const LocationSelect = () => (

    <Select options={locations}
        isSearchable={true}/>
);

export default LocationSelect;