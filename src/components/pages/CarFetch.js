import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import Grid from "@material-ui/core/Grid";
import CarsDisplay from "./CarsDisplay";

function CarFetch() {
  const [cars, setCars] = useState([]);
  const url = "http://127.0.0.1:8000";
  useEffect(() => {
    axios
      .get(`${url}/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid container item sm={12} m={3} lg={2}>
        <div style={{ margin: "16px" }}>
          <Filter />
        </div>
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(0, 4)} />
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(4, 9)} />
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(9, 14)} />
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(14, 19)} />
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(19, 24)} />
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        <CarsDisplay props={cars.slice(23, 24)} />
      </Grid>
    </Grid>
  );
}

export default CarFetch;
