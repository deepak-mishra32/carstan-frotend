import React from "react";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import App from "./App";
import CarFetch from "./components/pages/CarFetch";
import CarDetails from "./components/pages/CarDetails";
import NavbarTop from "./components/navigations/Navbar";
import NotFound from "./components/pages/NotFound";
import FilterCars from "./components/pages/FilterCars";
import "./Router.css";

function router() {
  return (
    <div className="app">
      <Routing>
        <NavbarTop />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/cars" exact component={CarFetch} />
          <Route path="/product/:name" exact component={CarDetails} />
          <Route
            path="/filter/:transmission/:category/:company/:price/:fuel"
            // exact
            component={FilterCars}
          />
          <Route component={NotFound} />
        </Switch>
      </Routing>
    </div>
  );
}

export default router;
