import React from "react";
import CatchActions from "../actions/CatchActions";
import LocationActions from "../actions/LocationActions";
import LocationSelect from "./LocationSelect";


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
        LocationActions.getLocations();
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

