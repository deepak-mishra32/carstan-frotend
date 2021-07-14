import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";

import CarsDisplay from "./pages/CarsDisplay";

function RelatedCars(props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/category/${props.type}`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.type]);
  return <CarsDisplay props={cars} />;
}

export default RelatedCars;
