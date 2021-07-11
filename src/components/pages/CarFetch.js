import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Filter from "../Filter";
import Grid from "@material-ui/core/Grid";
import CarsDisplay from "./CarsDisplay";
import { BASE_URL, PAGE_SIZE } from "../../utils/Constant";
import "./styles/Filter.css";

function CarFetch() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * PAGE_SIZE;

  const loadHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cars/`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item sm={12} m={3} lg={3}>
        <div style={{ margin: "16px" }}>
          <Filter />
        </div>
      </Grid>
      <Grid item sm={12} m={9} lg={9}>
        <CarsDisplay props={cars.slice(0, lastIndex)} />
        {lastIndex <= cars.length && (
          <button className="root" onClick={loadHandler}>
            Load More
          </button>
        )}
      </Grid>
    </Grid>
  );
}

export default CarFetch;
