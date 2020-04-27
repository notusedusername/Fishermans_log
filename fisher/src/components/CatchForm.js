import React from "react";
import CatchActions from "../actions/CatchActions";
import LocationSelect from "./LocationSelect";
import catchDispatcher from "../dispatchers/CatchDispatcher";
import locations from "./Locations";

const axios = require('axios');


class CatchForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            fisherman: 1,
            location : 1,
            species : '',
            weight : ''
        };
    }

    componentDidMount() {
        CatchActions.getLocations();
    }

    render() {
       return(
           <form id={"catchForm"} >
               <h2>Record Catch</h2>
               <div className="form-group">
                   <label htmlFor="location">Location</label>
                   <LocationSelect onChange={(e)=>{
                       this.setState({location : e.target.value});
                   }}/>
               </div>
               <div className="form-group">
                   <label htmlFor="species">Species</label>
                   <input type="text"  value={this.state.species}  className="form-control" id="species"
                          placeholder="Species of the fish"
                          onChange={(e)=>{
                              this.setState({species : e.target.value});
                          }}/>
               </div>
               <div className="form-group">
                   <label htmlFor="weight">Weight</label>
                   <input type="number" value={this.state.weight} className="form-control" id="weight"
                          placeholder="Weight of the fish"
                          onChange={(e)=>{
                              this.setState({weight : e.target.value});
                          }}/>
               </div>
               <button type="submit" className="btn btn-primary" onClick={() => CatchActions.postCatch(this.state)}>Submit</button>
           </form>
       );
    }
}

export default CatchForm;

catchDispatcher.register((action) => {
    console.log(action.command.commandType);
    if(action.command.commandType === 'GET_LOC_LIST'){
       axios.get('http://localhost:3001/locations')
           .then((res) => {
               Object.assign(locations, res.data.map(entry => {return {value: entry.id, label: entry.name }}));
                console.log(res.data);
           })
           .catch((err) => {
               console.log(err);
           });
   }
   else if(action.command.commandType === 'POST_CATCH'){
       let item = action.command.item;
       axios.post('http://localhost:3001/catches', {
            fisherman: item.fisherman,
            location: item.location,
            timestamp: Date.now(),
            weight: item.weight,
            species: item.species
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
   }

});