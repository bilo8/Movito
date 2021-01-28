import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Home from "./Container/Home/Home";
import Add from "./Container/Add/Add";
import MyList from "./Container/MyList/MyList";

import { GlobalProvider } from "./Context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/MyList">
            <MyList />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
