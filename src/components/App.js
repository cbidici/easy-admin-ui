import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Main from "./Main";
import Help from "./Help";
import TopNavigation from "./TopNavigation";
import Entities from "./entities/Entities";
import DeleteEntityData from "./entities/DeleteEntityData";
import history from "../history";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <TopNavigation />
      <Layout>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/help" exact component={Help} />
            <Route path="/entities" exact component={Entities} />
            <Route path="/entities/:key" exact component={Entities} />
            <Route path="/entities/:key/delete" exact component={DeleteEntityData} />
          </Switch>
        </Router>
      </Layout>
    </Layout>
  );
};

export default App;
