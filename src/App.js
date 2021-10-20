import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Navigation";
import TankInfo from "./components/TankInfo";
import RegForm from "./components/Registration";
import Home from "./components/Home"


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={() => <Home />} />
          <Route path="/TankInfo" exact component={() => <TankInfo />} />
          <Route path="/RegForm" exact component={() => <RegForm />} />
        </Switch>
        </Router>
      </div>
  );
}

export default App;
