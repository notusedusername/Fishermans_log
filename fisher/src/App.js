import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Menu from "./components/Menu";
import './App.scss';
import CatchForm from "./components/CatchForm";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menu/>
          <Switch>
              <Route exact={true} component={Welcome} path={"/"}/>
              <Route exact={true} component={CatchForm} path={"/catch"}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
