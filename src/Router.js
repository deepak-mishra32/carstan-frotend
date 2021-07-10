import React from "react";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import App from "./App";
import CarFetch from "./components/pages/CarFetch";
import CarDetails from "./components/pages/CarDetails";
import Navbar from "./components/navigations/Navbar";
import NotFound from "./components/pages/NotFound";
import FilterCars from "./components/pages/FilterCars";

function router() {
  return (
    <Routing>
      <Navbar />
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
  );
}

export default router;
