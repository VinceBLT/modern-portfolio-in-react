import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default App;
