import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;

  apikey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/buisness">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="buisness"
                pageSize={this.pageSize}
                country="in"
                category="buisness"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                apiKey={this.apiKey}
                setProgress={this.setProgress}
                key="technology"
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
