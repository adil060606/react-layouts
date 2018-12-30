import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LayoutList from "./components/list/layoutList";
import TopPanel from "./components/topPanel";

import "bootstrap/dist/css/bootstrap.css";
import "./../node_modules/react-grid-layout/css/styles.css";
import "./../node_modules/react-resizable/css/styles.css";
import "./App.css";
import Configuration from "./components/configuration/configuration";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <TopPanel />
            <Switch>
              <Route path="/list" component={LayoutList} />
              <Route path="/configure" component={Configuration} />
              <Route render={() => <Redirect to="/list" />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
