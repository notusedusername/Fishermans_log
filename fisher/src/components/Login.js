import React from "react";
import LoginAction from "../actions/LoginAction";


class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        LoginAction.getStatus(this);
    }

    render() {
        return(
        <div className="col-sm-4">
            <div className="card">
                <article className="card-body">
                    <h4 className="card-title mb-4 mt-1">Sign in</h4>
                    <form>
                        <div className="form-group">
                            <label>Your id</label>
                            <input type="number" min="1" max="100" placeholder="Number 1-100" required={true} name="" value={this.state.id} onChange={(e)=>{
                                this.setState({id : e.target.value});
                            }} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Your password</label>
                            <input required={true} className="form-control" placeholder="******" type="password"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" onClick={(e) => {LoginAction.login(this.state); e.preventDefault(); document.location = 'http://localhost:3000'}}> Login  </button>
                        </div>
                    </form>
                </article>
            </div>
        </div>
        );

    }
}

export default Login;

