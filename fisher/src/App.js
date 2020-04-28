import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Menu from "./components/Menu";
import './App.scss';
import CatchForm from "./components/CatchForm";
import CatchList from "./components/CatchList";
import Welcome from "./components/Welcome";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menu/>
          <Switch>
              <Route exact={true} component={Welcome} path={"/"}/>
              <Route exact={true} component={CatchForm} path={"/catch"}/>
              <Route exact={true} component={CatchList} path={"/catches"}/>
              <Route exact={true} component={Login} path={"/login"}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
