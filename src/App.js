import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router,  Route, Switch} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/buisness">
              <News pageSize={this.pageSize} country="in" category="buisness" />
            </Route>
            <Route exact path="/entertainment">
              <News
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News pageSize={this.pageSize} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News pageSize={this.pageSize} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News pageSize={this.pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

// db1a201e0e1f4f1793d7c37f91cd7b5d-- api key
