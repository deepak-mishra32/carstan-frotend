import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import Grid from "@material-ui/core/Grid";
import { BASE_URL, IMG_URL } from "../../utils/Constant";

function FilterCars(props) {
  const [cars, setCars] = useState([]);
  const { category, company, transmission, fuel, price } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/filter/${transmission}/${category}/${company}/${price}/${fuel}`
      )
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        if (cars.length >= 1) {
          setError("");
        } else {
          setError("No Cars Available");
        }
      })
      .catch((err) => {
        setError(err.response.data.Error);
      });
  }, [cars.length, category, company, transmission, fuel, price]);

  return (
    <Grid container spacing={1}>
      <Grid container item sm={12} m={3} lg={2}>
        <div style={{ margin: "16px" }}>
          <Filter />
        </div>
      </Grid>
      <Grid container item sm={12} m={3} lg={10}>
        {error ? (
          <p>{error}</p>
        ) : (
          cars.map((car) => (
            <>
              <div
                key={car.id}
                style={{
                  margin: "16px",
                  display: "flex",
                  width: "50%",
                }}
              >
                <img
                  src={`${IMG_URL}${car.image1}`}
                  alt="Image1"
                  style={{
                    height: "200px",
                    width: "200px",
                    margin: "0px 16px",
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <h3>
                    {car.company} {car.name}
                  </h3>
                  <h4>
                    &#8377;
                    {car.price} Lakhs
                  </h4>
                  <Link
                    to={{
                      pathname: `/product/${car.name}`,
                    }}
                  >
                    View
                  </Link>
                </div>
              </div>
            </>
          ))
        )}
      </Grid>
    </Grid>
  );
}

export default FilterCars;
