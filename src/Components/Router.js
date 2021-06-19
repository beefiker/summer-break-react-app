import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Login from "Routes/Login";
import Register from "Routes/Register";
import Notice from "Routes/Notice";
import Detail from "Routes/Detail";

const reactRouter = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/notice" component={Notice} />
          <Route path="/detail" component={Detail} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default reactRouter;
