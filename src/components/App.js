import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Main from "./Main";
import Help from "./Help";
import TopNavigation from "./TopNavigation";
import Entities from "./entities/Entities";
import history from "../history";

const App = () => {
  return (
    <Layout>
      <TopNavigation />
      <Layout>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/help" exact component={Help} />
            <Route path="/entities" exact component={Entities} />
          </Switch>
        </Router>
      </Layout>
    </Layout>
  );
};

export default App;
