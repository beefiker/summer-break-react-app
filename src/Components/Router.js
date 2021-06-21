import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Login from "Routes/Login";
import Register from "Routes/Register";
import Notice from "Routes/Notice";
import Detail from "Routes/Detail";
import Search from "Routes/Search";

const reactRouter = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tag/:id" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/notice" component={Notice} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/search/:id" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default reactRouter;
