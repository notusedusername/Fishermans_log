import React from "react";
import Select from 'react-select';
import locations from "./Locations";

const LocationSelect = () => (

    <Select options={locations}
        isSearchable={true}/>
);

export default LocationSelect;